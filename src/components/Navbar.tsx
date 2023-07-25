import React from 'react';
import styled from '@emotion/styled';

const NavbarContainer = styled.nav`
  width: 100%; 
  height: 60px; 
  background: white;
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  padding: 0 20px; 


@media (max-width: 768px) {
  flex-direction: row; 
  height: 50px; 
  padding: 0 10px;
}
`;

const Title = styled.h1`
  font-size: 24px; 
  color: #333; 

  @media (max-width: 768px) {
    font-size: 18px; 
    flex-grow: 1;
    text-align: left; 
  }
`;

const Button = styled.button`
  font-size: 16px; 
  color: white;
  background: #333; 
  border: none; 
  border-radius: 5px;
  padding: 10px 20px; 
  margin: 40px;



  @media (max-width: 768px) {
    font-size: 14px; 
    padding: 8px 16px; 
    align-self: right;
    
  }
`;

export function Navbar() {
  
return (
    <NavbarContainer>
      <Title>ANIMEPEDIA</Title> 
      <Button>Collection List</Button> 
    </NavbarContainer>
  );
}
