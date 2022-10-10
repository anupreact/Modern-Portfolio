import React from 'react';

const Contacts = (props) => {
  const icons = [
    'fa fa-linkedin',
    'fa fa-envelope',
    'fa fa-github',
    'fa fa-telegram',
  ];
  return (
    <section className="contact">
      {props.heading && <h1 className="heading">CONTACT</h1>}
      {props.head && (
        <div className="head">
          <span>LET’S TALK</span>
          <span>
            Share your excitement with us. I will be more than happy to serve my
            Services to you.
          </span>
          <span>Choose any of the below options to connect with me.</span>
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
              {icons.map((icon, index) => {
                return (
                  <div className="icons" key={index}>
                    <i className={icon} aria-hidden="true"></i>
                  </div>
                );
              })}
            </div>
          </div>
        </div>





        
        <div className="card right-card">
          <div className="header">
            <h3>Send Me An Enquiry</h3>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Your Name" />
          </div>{' '}
          <div className="inputs">
            <input type="text" placeholder="Your Email" />
          </div>{' '}
          <div className="inputs">
            <textarea row="6" col="6" type="text" placeholder="Your Message" />
          </div>{' '}
          <div className="inputs">
            <button>SEND MESSAGE</button>
          </div>
        </div>{' '}
      </div>
    </section>
  );
};

export default Contacts;
