import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CallToAction from './Hire';
import './Footer.css'
import './Cv.css';

const Cv = () => {
  return (
    <div>
      <Header />
      <div className="cv-container">
        <h1 className="cv-title">View My CV.</h1>
        <p className="cv-paragraph">
            Learn more about my skills and experience.
          </p>
        <div className="cv-options">
          <a href="/path/to/download/pdf" download>Download here</a>
          <a href="https://docs.google.com/document/d/view?id=YOUR_DOC_ID_HERE&usp=sharing" target="_blank" rel="noopener noreferrer">View here</a>
        </div>
        <div className="cv-text">

        </div>
       
      </div>
    <CallToAction />
    <Footer />
    
    </div>
  );
};

export default Cv;
