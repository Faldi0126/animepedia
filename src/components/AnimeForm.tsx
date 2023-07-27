import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

// Define a type for the collection data
type Collection = {
  name: string;
  anime: number[];
};


// Define a type for the form data
type FormData = {
  collectionName: string;
  newCollection: boolean;
};

// Define a type for the props
type Props = {
  animeId: number;
};

const Checkbox = styled.input`
  margin-right: 10px;
`;


// Define a component for the form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

// Define a component for the input field
const Input = styled.input`
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
`;

// Define a component for the radio button
const Radio = styled.input`
  margin-right: 10px;
`;

// Define a component for the label
const Label = styled.label`
  display: flex;
  align-items: center;
`;


// Define a component for the button
const Button = styled.button`
  padding: 10px;
  background: #333;
  color: white;
  border: none;
  border-radius: 5px;
`;

export default function AnimeForm({ animeId }: Props) {
  
// Define a state variable to store the form data
const [formData, setFormData] = useState<FormData>({
    collectionName: '',
    newCollection: false,
});

// Define a state variable to store the collection data
const [collections, setCollections] = useState<Collection[]>([]);

// Define a state variable to store the user's choice
const [choice, setChoice] = useState('new');

// Define a function to handle input change
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;

    // Update the form data according to the input name and type
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
};

// Define a function to handle radio change
const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Update the choice state according to the radio value
    setChoice(value);
};

// Define a function to handle form submit
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get the collection name and new collection flag from the form data
    const { collectionName, newCollection } = formData;

    // Validate the collection name (no special characters and not empty)
    if (!/^[a-zA-Z0-9 ]+$/.test(collectionName) || collectionName === '') {
      alert('Invalid collection name');
      return;
    }

    // Check if the collection name already exists
    const existingCollection = collections.find(
      c => c.name.toLowerCase() === collectionName.toLowerCase()
    );

    // If the user wants to add to a new collection, but the name already exists, alert an error
    if (newCollection && existingCollection) {
      alert('Collection name already exists');
      return;
    }

    // If the user wants to add to an existing collection, but the name does not exist, alert an error
    if (!newCollection && !existingCollection) {
      alert('Collection name does not exist');
      return;
    }

     // If the user wants to add to an existing collection, and the name exists, but the anime is already in it, alert an error
     if (!newCollection && existingCollection && existingCollection.anime.includes(animeId)) {
      alert('Anime already in collection');
      return;
     }

     // Update the collections state with the new or updated collection
     setCollections(prev => {
       // If the user wants to add to a new collection, create a new object and append it to the array
       if (newCollection) {
         return [...prev, { name: collectionName, anime: [animeId] }];
       }

       // If the user wants to add to an existing collection, find the index of that collection and update its anime array with the new id
       const index = prev.findIndex(
         c => c.name.toLowerCase() === collectionName.toLowerCase()
       );
       const updatedCollection = {
         ...prev[index],
         anime: [...prev[index].anime, animeId],
       };

       // Return a new array with the updated collection at the same index
       return [...prev.slice(0, index), updatedCollection, ...prev.slice(index + 1)];
     });

     // Reset the form data
     setFormData({
       collectionName: '',
       newCollection: false,
     });
};

// Define a function to save the collections data to local storage
const saveToStorage = () => {
    // Convert the collections array to a JSON string
    const json = JSON.stringify(collections);

    // Save the JSON string to the local storage with a key 'collections'
    localStorage.setItem('collections', json);
};

// Define a function to load the collections data from local storage
const loadFromStorage = () => {
    // Get the JSON string from the local storage with a key 'collections'
    const json = localStorage.getItem('collections');

    // If the JSON string exists, parse it to an array and set it to the collections state
    if (json) {
      const parsed = JSON.parse(json) as Collection[];
      setCollections(parsed);
    }
};

// Use an effect hook to load the collections data from local storage when the component mounts
useEffect(() => {
  loadFromStorage();
}, []);

// Use an effect hook to save the collections data to local storage when the collections state changes
useEffect(() => {
  saveToStorage();
}, [collections]);

return (
  <Form onSubmit={handleSubmit}>
          {/* Add a radio button group to let the user choose their option */}
          <Label>
            <Radio
              type="radio"
              name="choice"
              value="new"
              checked={choice === 'new'}
              onChange={handleRadioChange}
            />
            Create new collection
          </Label>
          <Label>
            <Radio
              type="radio"
              name="choice"
              value="existing"
              checked={choice === 'existing'}
              onChange={handleRadioChange}
            />
            Add to existing collection
          </Label>
          {/* Conditionally render the input field or the list of collections based on the choice */}
          {choice === 'new' ? (
            <Input
              type="text"
              name="collectionName"
              value={formData.collectionName}
              onChange={handleChange}
              placeholder="Enter collection name"
            />
          ) : (
            <div>
              {/* Map over the collections and render a checkbox for each one */}
              {collections.map(collection => (
                <Label key={collection.name}>
                  <Checkbox
                    type="checkbox"
                    name="collectionName"
                    value={collection.name}
                    onChange={handleChange}
                  />
                  {collection.name}
                </Label>
              ))}
            </div>
          )}
          <Button type="submit">Add</Button>
        </Form>
);
}
