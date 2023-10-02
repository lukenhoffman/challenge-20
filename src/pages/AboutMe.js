import React from 'react';
import styled from 'styled-components';
import avatar from './avatar.JPG'; // Replace with your avatar or photo

const AboutMeContainer = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 2px solid #61dafb; // Change color as per your theme
`;

const Bio = styled.p`
  margin-top: 1rem;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  color: #282c34; // Change color as per your theme
`;

function AboutMe() {
  return (
    <AboutMeContainer>
      <Image src={avatar} alt="Developer Avatar" />
      <Bio>
        Hello! I’m [Luken Hoffman], a passionate and enthusiastic web developer specializing in creating amazing
        experiences on the web. With a profound understanding of frontend and backend technologies, I have contributed to the
        development of multiple single-page applications utilizing React.js, JavaScript, HTML, CSS, and a variety
        of libraries and frameworks.

        {/* Add more about your experience, skills, background, etc. */}
      </Bio>
    </AboutMeContainer>
  );
}

export default AboutMe;
