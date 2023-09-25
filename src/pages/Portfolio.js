import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const PortfolioContainer = styled.section`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const projects = [
  {
    title: 'Project One',
    imageUrl: '/path-to-image-1',
    deployedUrl: 'https://project-one.com',
    repoUrl: 'https://github.com/username/project-one',
  },
  // ... add other projects
];

function Portfolio() {
  return (
    <PortfolioContainer>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          imageUrl={project.imageUrl}
          deployedUrl={project.deployedUrl}
          repoUrl={project.repoUrl}
        />
      ))}
    </PortfolioContainer>
  );
}

export default Portfolio;
