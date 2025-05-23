// components/Home/Social.jsx
import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://linkedin.com/" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a href="https://github.com/" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-github-alt"></i>
      </a>
      <a href="https://twitter.com/" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-twitter-alt"></i>
      </a>
    </div>
  );
};

export default Social;