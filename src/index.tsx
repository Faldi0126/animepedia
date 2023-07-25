import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache ,ApolloProvider } from '@apollo/client';

import { createGlobalStyle } from 'styled-components';

import { Global } from '@emotion/react';
import { Navbar } from './components/Navbar';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;500&display=swap');
* {
    font-family: 'Raleway', sans-serif;
}


body {
  margin: 0;
  overflow-x: hidden;
}
`;


//? apollo client instance
const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(), 
});



ReactDOM.render(
  <ApolloProvider client={client}>
    <Navbar/>
    <GlobalStyle />
    <App />
    <Global styles={{
      body: {
        background: "linear-gradient(to right , #71c3f7, #f6f6f6)" 
      }
    }} />
    
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
