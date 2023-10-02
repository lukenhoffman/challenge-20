import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
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

function Navigation() {
  return (
    <NavigationContainer>
      <ul>
        <li><NavLink to="/about" activeClassName="active">About Me</NavLink></li>
        <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
      </ul>
    </NavigationContainer>
  );
}

export default Navigation;
