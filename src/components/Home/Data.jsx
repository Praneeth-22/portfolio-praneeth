import React from 'react';
import { ReactTyped } from 'react-typed';
import resumePDF from '../../assets/Praneeth_Yennam_resume.pdf'; 
const Data = () => {
  return (
    <div data-aos="fade-in" className="home__data">
      <p className='home__greeting'>Hi, This is</p>
      <h1  className="home__title">Praneeth Yennam</h1>
      <h3 className='home__subtitle'>
        <ReactTyped
          strings={[
            'Software Engineer',
            'Full Stack Developer',
            // 'AWS Enthusiast'
          ]}
          typeSpeed={80}
          backSpeed={50}
          backDelay={1000}
          loop
        />
      </h3>
      <p className="home__description">
      New York-based software developer with experience in full-stack development and automation.
      </p>
      <div className="home__buttons">
        <a href={resumePDF} className="button" download="Praneeth_Yennam_resume.pdf">Download Resume</a>
      </div>
    </div>
  )
}

export default Data;