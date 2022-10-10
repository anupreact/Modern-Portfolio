import React from 'react';
import banner from '../../images/banner.jpg';
import banner2 from '../../images/Banner2.png';

const ProjectCard = () => {
  return (
    <div className="card">
      <div className="image-box">
        {/* <img src={banner} alt="" /> */}
        <img src={banner2} alt="" />
      </div>
      <div className="title">
        <span> Type : Ecommerce</span>
      </div>
      <div className="description">
        Stack Used : React, Redux, Scss, Antd, React-router-dom, Json-server
      </div>
      <div className="visit">
        <a
          style={{ color: 'white' }}
          href="https://cakes-fantasy.web.app/"
          target="_blank"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
