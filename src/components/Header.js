import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

const Navigation = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
  }

  li {
    display: inline;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;

    &.active {
      border-bottom: 2px solid #61dafb;
    }

    &:hover {
      color: #61dafb;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <DeveloperName>John Doe</DeveloperName>
      <Navigation>
        <ul>
          <li><NavLink to="/about" activeClassName="active">About Me</NavLink></li>
          <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
