import React from "react";

const Contacts = (props) => {
  // const icons = [
  //   'fa fa-linkedin',
  //   'fa fa-envelope',
  //   'fa fa-github',
  //   'fa fa-telegram',
  // ];

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
    <section className="contact">
      {props.heading && <h1 className="heading">CONTACT</h1>}
      {props.head && (
        <div className="head">
          <span>Contact Me</span>
         
          <span>I am available on almost every social media. You can message me, <br />
            I
            will reply within 24 hours. I can help you with Single Page Applications using React JS,  <br />Javascript , &  various Technial aspects of Frontend Web development.</span>

          
        </div>
      )}

      <div className="cards-container">
        <div className="card">
          <h2 className="left-card-header">Reach Out to me</h2>
          <div className="edu">
            <div className="icon">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div className="content">
              <span>At Post Mohagaon (Zilpi) , Ta. Hingna</span>
              <div>Maharashtra Nagpur, 441110</div>
            </div>
          </div>
          <div className="edu">
            <div className="icon">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="content">
              <span>9834075615 / 8600390454</span>
            </div>
          </div>
          <div className="edu">
            <div className="icon">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="content">
              <span>anupmanwatkar17@gmail.com</span>
            </div>
          </div>

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
        </div>



        <div className="card right-card">
          <div className="header">
            <h2 className="right-card-header" style={{color:"white"}}>Send Me An Enquiry</h2>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Your Name" />
          </div>{" "}
          <div className="inputs">
            <input type="text" placeholder="Your Email" />
          </div>{" "}
          <div className="inputs">
            <textarea row="6" col="6" type="text" placeholder="Your Message" />
          </div>{" "}
          <div className="inputs">
            <button>SEND MESSAGE</button>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Contacts;
