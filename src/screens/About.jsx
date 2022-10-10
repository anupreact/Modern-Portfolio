import React from 'react';
import AboutContent from '../components/Home/AboutContent';

const About = () => {
  return (
    <main className="about_page_container">
      <AboutContent home={true} intro={true} techIntro={true} heading={false} />
    </main>
  );
};

export default About;
