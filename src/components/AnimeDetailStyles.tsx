import styled from '@emotion/styled';



type BannerProps = React.ComponentPropsWithRef<'div'> & {
  image: string;
};

export const Banner = styled.div<BannerProps>`
  width: 100%;
  height: 50vh;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

export const Card = styled.div`
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

export const Content = styled.div`
display:flex; 
align-items:center; 
justify-content:center; 
gap: 20px; 

@media (max-width:768px) {
    flex-direction: column; 
}
`;

export const CoverImage = styled.img`
width:400px;
height:auto; 
object-fit:cover; 
border-radius: 20px; 
margin: 10px;
margin-right: 20px;

@media (max-width: 768px) {
    width:auto; 
    height:auto; 
    margin:auto; 
}
`;

export const Info = styled.div`
display:flex; 
flex-direction: column; 
gap: 30px; 
width:60%; 
align-items: flex-start;

@media (max-width:768px) {
    width:100%; 
}
`;

export const Title = styled.h1`
font-size: 40px; 
font-weight: bold; 
text-align: center; 

@media (max-width: 768px) {
    font-size: 24px; 
}
`;

export const Genres = styled.p`
margin: 0;
display: flex; 
flex-wrap: wrap; 
gap: 5px; 
justify-content: center; 
`;

export const Genre = styled.span`
background:#333; 
border-radius: 5px; 
padding: 5px 10px; 
color: white; 
font-size: 14px; 
`;

export const Episodes = styled.p`
margin: 0;
font-size: 16px; 
text-align: center; 

@media (max-width: 768px) {
    font-size: 14px; 
}
`;

export const Description = styled.p`
margin: 0;
font-size: 16px; 

@media (max-width: 768px) {
    font-size: 14px; 
}
`;

export const Score = styled.p`
margin: 0;
font-size: 16px; 
text-align: center; 

@media (max-width: 768px) {
    font-size: 14px; 
}
`;

