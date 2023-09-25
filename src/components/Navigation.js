import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation'; // Importing the Navigation component

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: #282c34;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`;

const DeveloperName = styled.h1`
  color: #61dafb;
  margin: 0;
  font-size: 2rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <DeveloperName>John Doe</DeveloperName>
      <Navigation /> {/* Using the Navigation component */}
    </HeaderContainer>
  );
}

export default Header;
