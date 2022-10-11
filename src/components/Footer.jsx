import React from 'react';

const Footer = () => {
  const icons = [
    {
      icon: "fa fa-linkedin",
      link: "https://www.linkedin.com/in/iamanup17",
    }, 
     {
      icon: "fa fa-google",
      link: "https://www.gmail.com/anupmanwatkar",
    },
    {
      icon: "fa fa-facebook",
      link: "https://www.facebook.com/anup.manwatkar",
    },
    {
      icon: "fa fa-telegram",
      link: "https://t.me/anup_manwatkar",
    },
    {
      icon: "fa fa-github",
      link: "https://github.com/iamanup17?tab=repositories",
    },
  ];
  return (
    <section className="footer">
      

      <div className="icons-row">
        <div className="media-btns">
        {icons.map((iconL, index) => {
              return (
                <div className="icons" key={index}>
                  <a target="_blank" href={iconL.link}>
                    <i className={iconL.icon} aria-hidden="true"></i>
                  </a>
                </div>
              );
            })}
        </div>
      </div>

      <span className="disclaimer">
        Copyright @ All Rights reserved 2022 | Made with <span style={{color:"red"}}>&#10084;</span>  by Anup
      </span>
    </section>
  );
};

export default Footer;
