import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAnime } from '../hooks/useSingleAnime';
import { BsStarFill } from 'react-icons/bs';
import {
  Banner,
  Card,
  Content,
  CoverImage,
  Info,
  Title,
  Genres,
  Genre,
  Episodes,
  Description,
  Score,
} from '../components/AnimeDetailStyles'

// Import the modal library and the CSS file
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import AnimeForm from '../components/AnimeForm';

export function AnimeDetail() {
  
const { id } = useParams();
const { data, loading, error } = useAnime(parseInt(id?.toString() ?? '0'));

// Define a state variable to store the modal open status
const [modalIsOpen, setModalIsOpen] = React.useState(false);

// Define a function to open the modal
const openModal = () => {
  setModalIsOpen(true);
};

// Define a function to close the modal
const closeModal = () => {
  setModalIsOpen(false);
};


if (loading) return <p>Loading...</p>;
if (error) return <p>Error:{error.message}</p>;



return (
  <Card >
    <Content>
      <CoverImage src={data.Media.coverImage.large} alt={data.Media.title.romaji} />
      <Info>
        <Title>{data.Media.title.romaji}</Title>
        <Genres>
          {data.Media.genres.map((genre:string) => (
            <Genre key={genre}>{genre}</Genre>  
          ))}
        </Genres>
        <Episodes>{data.Media.episodes} episodes</Episodes>
        <Description>{data.Media.description}</Description>
        <Score>
          <BsStarFill color="#FFD700" /> 
          {data.Media.averageScore}%</Score>
        <button onClick={openModal}>Add to collection</button>
        // Set the center prop to true on the Modal component
        <Modal open={modalIsOpen} onClose={closeModal} center>
          <AnimeForm animeId={data.Media.id} />
        </Modal>
      </Info>
    </Content>
  </Card>

);
}
