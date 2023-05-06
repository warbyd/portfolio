import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CallToAction from './Hire';
import './Footer.css';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <h1 className="contact-title">Contact.</h1>
        <p className="contact-paragraph">
          Thanks for visiting!
        </p>
        <p className="contact-paragraph2">
          Feel free to contact me to have a brief conversation or to discuss our next steps.<br /> 
          <br />You can reach me at:
        </p>
        <ul className="contact-list">
          <li><a href="mailto:dalewwarburton@gmail.com">dalewwarburton@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/yourusername/"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/yourusername"><i className="fab fa-github"></i></a></li>
        </ul>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Contact;
