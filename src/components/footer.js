import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
`;

const SocialLinks = styled.div`
  a {
    color: #61dafb;
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com/lukenhoffman" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://stackoverflow.com/users/your_user_id" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-stack-overflow"></i>
        </a>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;
