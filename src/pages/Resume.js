import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResumeLink = styled.a`
  font-size: 1.2rem;
  color: #61dafb; // Change color as per your theme
  margin-bottom: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ProficienciesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Proficiency = styled.li`
  background-color: #282c34; // Change color as per your theme
  color: #fff; // Change color as per your theme
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
`;

function Resume() {
  const proficiencies = [
    'JavaScript',
    'React.js',
    'Node.js',
    'MongoDB',
    'Express.js',
    'HTML',
    'CSS',
    // add more proficiencies as needed
  ];

  return (
    <ResumeContainer>
      <ResumeLink href="/path-to-your-resume.pdf" download="LukenHoffman-Resume.pdf">
        Download My Resume
      </ResumeLink>
      <h2>My Proficiencies</h2>
      <ProficienciesList>
        {proficiencies.map((proficiency, index) => (
          <Proficiency key={index}>{proficiency}</Proficiency>
        ))}
      </ProficienciesList>
    </ResumeContainer>
  );
}

export default Resume;
