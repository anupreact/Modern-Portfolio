import React from 'react';

const AboutTech = () => {
  const techData = [
    ' Expertise in React JS framework to develop Single Page Applications.',
    'Experienced in React JS and working with React Flux & Redux architecture.',
    'Experience in using React JS components, Forms, Events, Keys, Router, & Redux',
    "Good Experience in React.js for creating interactive UI's using One-way data flow, Virtual DOM, JSX.",
    'Expertise in using IDE tools like VS-code and Sublime Text.',
    'Ability to work effectively while working as a team member as well as individually.',
    'Excellent communication and Inter-Personal Skills, well organized, goal oriented.',
  ];

  return (
    <div className="react-info">
      <div className="head">
        <span>Profile :-</span>
        <br />
      </div>
      <ul>
        {techData.map((list, index) => {
          return <li key={index}>{list}</li>;
        })}
      </ul>
    </div>
  );
};

export default AboutTech;
