import React from 'react';
import AboutTech from './AboutTech';
import AboutCard from './AboutCard';

const AboutContent = (props) => {
  return (
    <section className="about">
      {props.heading && (
        <h1 className="heading" style={{ textAlign: 'center' }}>
          ABOUT
        </h1>
      )}
      {props.intro && (
        <div className="quote">
          <span> “ </span>
          Hello, I am Anup Manwatkar <br /> graduated as an Electronics Engineer
          from Nagpur University in 2017. I have started my IT Journey in Feb
          ‘2021. I have completed 3-months React Js Training from Banglore,
          After successfull completion of the course, I joined a company as a
          React Js Intern at Nagpur. And Currently from April 2022 I’am working{' '}
          <br /> as a Junior React Js Developer in WPWeb infotech Pvt. Ltd
          Ahmedabad. <span>”</span>
        </div>
      )}

      {props.techIntro && <AboutTech />}
      <AboutCard />
    </section>
  );
};

export default AboutContent;
