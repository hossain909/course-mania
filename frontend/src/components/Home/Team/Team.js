import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import four from "../img/four.jpg";
import one from "../img/one.jpg";
import three from "../img/three.jpg";
import two from "../img/two.jpg";
import "./Team.css";
const Team = () => {
  return (
    <section className="team-section py-5 mt-3  text-dark">
      <div className="container">
        <h2 className="text-center font-weight-bold text-info mb-4">Meet Our Team</h2>
        <div className="row py-5">
          <div className="col span-1-of-4 box">
            <img src={one} className="team-member" alt="Anna Hathaway" />
            <h5>Anna Hathaway</h5>
            <span className="role">Frontend Developer</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing eit. Modi nam nesciunt odio dolorem harum illo.</p>
            <div className="social-ink">
              <i className="p-2 h4 facebook"><FontAwesomeIcon icon={faFacebook} /></i>
              <i className="p-2 h4 twitter"><FontAwesomeIcon icon={faTwitter} /></i>
              <i className="p-2 h4 instagram"><FontAwesomeIcon icon={faInstagram} /></i>
              <i className="p-2 h4 youtube"><FontAwesomeIcon icon={faYoutube} /></i>
            </div>
          </div>
          <div className="col span-1-of-4 box">
            <img src={two} className="team-member" alt="David Backhum" />
            <h5>David Backhum</h5>
            <span className="role">Backend Developer</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing eit. Modi nam nesciunt odio dolorem harum illo.</p>
            <div className="social-ink">
              <i className="p-2 h4 facebook"><FontAwesomeIcon icon={faFacebook} /></i>
              <i className="p-2 h4 twitter"><FontAwesomeIcon icon={faTwitter} /></i>
              <i className="p-2 h4 instagram"><FontAwesomeIcon icon={faInstagram} /></i>
              <i className="p-2 h4 youtube"><FontAwesomeIcon icon={faYoutube} /></i>
            </div>
          </div>
          <div className="col span-1-of-4 box">
            <img src={three} className="team-member" alt="Jaccica" />
            <h5>Jassica Angel</h5>
            <span className="role">Software Engineer</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing eit. Modi nam nesciunt odio dolorem harum illo.</p>
            <div className="social-ink">
              <i className="p-2 h4 facebook"><FontAwesomeIcon icon={faFacebook} /></i>
              <i className="p-2 h4 twitter"><FontAwesomeIcon icon={faTwitter} /></i>
              <i className="p-2 h4 instagram"><FontAwesomeIcon icon={faInstagram} /></i>
              <i className="p-2 h4 youtube"><FontAwesomeIcon icon={faYoutube} /></i>
            </div>
          </div>
          <div className="col span-1-of-4 box">
            <img src={four} className="team-member" alt="James Carry" />
            <h5>James Carry</h5>
            <span className="role">CEO / Marketing Advisor</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing eit. Modi nam nesciunt odio dolorem harum illo.</p>
            <div className="social-ink">
              <i className="p-2 h4 facebook"><FontAwesomeIcon icon={faFacebook} /></i>
              <i className="p-2 h4 twitter"><FontAwesomeIcon icon={faTwitter} /></i>
              <i className="p-2 h4 instagram"><FontAwesomeIcon icon={faInstagram} /></i>
              <i className="p-2 h4 youtube"><FontAwesomeIcon icon={faYoutube} /></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;