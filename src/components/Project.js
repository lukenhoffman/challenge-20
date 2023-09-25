import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;
  margin: 1rem;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProjectInfo = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  margin-top: 0;
  color: #0366d6;
`;

const ProjectLinks = styled.div`
  margin-top: 1rem;
  
  a {
    color: #0366d6;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <ProjectContainer>
      <ProjectImage src={image} alt={`${title} screenshot`} />
      <ProjectInfo>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectLinks>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
          <span> | </span>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </ProjectLinks>
      </ProjectInfo>
    </ProjectContainer>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired
};

export default Project;
