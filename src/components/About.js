import React from 'react';
import Footer from './Footer';
import Header from './Header';
import CallToAction from './Hire';
import './About.css';


const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <h1 className="about-title">About.</h1>
        <div>
          <p className="about-text">
            I am an ambitious business and sales professional with a
            strong background in sales, marketing, and analysis.<br />
            With a proven
            ability to drive sales revenue, solve problems strategically, and
            deliver strong performance measures, I excel in fostering lasting relationships and effective communication.<br />
            <br />
            Recently, I completed a coding bootcamp at CodeClan, where I gained expertise in various programming languages and technologies.<br />
            I studied Python, utilizing Flask for web development and SQL for database management.<br />
            <br />
            In addition, I learned JavaScript using the Express framework, MongoDB for handling databases and React library for web applications. I also studied Java, which further expanded my programming skills.<br />
            <br />
            I am now enthusiastic about embarking on a new career path in the coding industry, where I can continue to grow and refine my skills.
          </p>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  );
}

export default About;
