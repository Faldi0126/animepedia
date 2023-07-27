
import React from 'react';
import { useAnimeList } from '../hooks/useAnimeList';
import { usePage } from '../contexts/PageContext';
import styled from '@emotion/styled';
import { PageProvider } from '../contexts/PageContext';

import { Link } from 'react-router-dom';




import { BsStarFill } from 'react-icons/bs';

import 'react-circular-progressbar/dist/styles.css';
import CirclingAnimation from '../components/LoadingIndicator';
import { Pagination } from '../components/Pagination';
import AnimeForm from '../components/AnimeForm';


const Card = styled.div`
  width: 75%; 
  min-height: 600px;
  height: auto;
  margin: 20px auto; 
  padding: 40px 20px; 
  background: white; 
  border-radius: 30px; 
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); 


  @media (max-width: 393px) {
    width: 75%;
    padding: 10px;
  }
`;





const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.div`
  width: 300px;
  height: 400px; 
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  position: relative; 
  overflow: hidden; 

  @media (max-width: 393px) {
    width:45%;
    height:300px; 
}

transition: transform 0.3s;

:hover {
transform: scale(1.1); 
}
`;

const CoverImage = styled.img`
width:100%;
height:100%; 
object-fit:cover;
`;

const Info = styled.div`
position:absolute;
bottom:0;
left:0;
right:0;
height:calc(100% /2.5);
backdrop-filter:blur(15px) brightness(0.6); 


@media (max-width:393px) {
    height:calc(100% /2);
}
`;

const Title = styled.h3`
margin:0;
padding:10px;
color:white; 
font-weight:bold; 
text-transform:uppercase; 
text-shadow:1px1px2px rgba(0,0,0,0.5);
`;

const Genres = styled.p`
margin:0;
padding:10px;
color:white; 
display:flex; 
flex-wrap:wrap; 
gap:5px; 
`;

const Genre = styled.span`
background:#333; 
border-radius:5px; 
padding:5px 5px; 
font-size:12px; 
`;

const Score = styled.p`
margin:0;
padding:10px;
color:white; 
display:flex; 
align-items:center; 
gap:5px; 
font-size:14px; 
`;



export function AnimeList() {
  
const { page } = usePage();
const { data, loading, error } = useAnimeList(page,10);

if (loading) return <Card><div style={{ width: 200, height: 200 }}>
<CirclingAnimation/>
</div></Card>;
if (error) return <p>Error:{error.message}</p>;

return (
    <Card>
    <ListContainer>
      <>
      {data.Page.media.map((anime:any) => (
        
        <Link key={anime.id} to={`/anime/${anime.id}`}>
        <ListItem key={anime.id}>
          <CoverImage src={anime.coverImage.large} alt={anime.title.romaji} />
          <Info> 
            <Title>{anime.title.romaji}</Title>
            <Genres>
              {anime.genres.map((genre:string) => (
                <Genre key={genre}>{genre}</Genre>  
              ))}
            </Genres>
            <Score>
              <BsStarFill color="#FFD700" /> 
              {anime.averageScore}%</Score>

          </Info>
        </ListItem>
        </Link>
      ))}
    <Pagination/>
      </>
    </ListContainer>

    </Card>
);
}
