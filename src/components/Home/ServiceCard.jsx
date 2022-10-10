import React from 'react';

const ServiceCard = (props) => {
  const { logo, title, description, icon } = props;
  return (
    <div className="card">
      <div className="logo">
        <i className={logo} aria-hidden="true"></i>
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      {/* <div className="know-more">Know More</div> */}
    </div>
  );
};

export default ServiceCard;
