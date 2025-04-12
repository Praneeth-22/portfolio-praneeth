import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 data-aos="fade-in" className="section__title">About Me</h2>
      <span data-aos="fade-in" className="section__subtitle">My Introduction</span>

      <div className="about__container container">
        <div className="about__content">
          <div className="about__text">

            <p className="about__description">
            I'm Praneeth Yennam, a New York-based software developer with a passion for building clean, scalable solutions across the stack. From crafting REST APIs and automating workflows to enhancing UI experiences, I love solving real-world problems through code.
            </p>
            <p className="about__description">
            With a Master's in Computer and Information Sciences from SUNY Albany and professional experience at the New York State Insurance Fund, I've worked hands-on with technologies like Java, Go, C#, React, and PL/SQL—always focused on writing efficient, reliable, and well-structured code. Whether I’m debugging backend logic or refining a front-end detail, I enjoy the challenge of constant learning and iteration.
            </p>
            <p className="about__description">
            What drives me is the excitement of progress—picking up new tools, understanding how systems work, and building things that make a difference. I believe good software blends performance with user experience, and I aim to bring that balance to every project I take on.
            </p>
            <p className="about__description">
            I believe the best developers are always evolving—so I keep pushing myself to learn, refine, and create. Whether it’s building something new or improving what already exists, I bring energy, clarity, and focus to everything I do.
            </p>
            {/* <a href="#contact" className="button button-flex"> */}
              {/* Contact Me <i className="uil uil-message button__icon"></i> */}
            {/* </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;