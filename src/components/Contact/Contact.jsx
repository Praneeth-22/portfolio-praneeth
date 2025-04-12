import React, { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_sbaie47',
      'template_2m3eyzm',
      form.current,
      'owPcnafcNf8Zwpgmd'
    ).then(
      (result) => {
        console.log('Email sent:', result.text);

        alert("Message sent successfully!");
      },
      (error) => {
        console.error('Error:', error.text);
        alert("Failed to send message.");
      }
    );

    e.target.reset(); // clear form
  };
  return (
    <section className="contact section" id="contact">
      <h2 data-aos="fade-in" className="section__title">Contact Me</h2>
      <span data-aos="fade-in" className="section__subtitle">Get in touch</span>

      <div className="contact__container container">
        <div className="contact__content">
          
          <form form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-group">
              <input type="text" name="name" className="contact__form-input" placeholder="Your Name" required />
              <input type="email" name="email" className="contact__form-input" placeholder="Your Email" required />
              <textarea name="message" className="contact__form-textarea" placeholder="Your Message" required></textarea>
              <button type="submit" className="button button-flex">
                Send Message
                <i className="uil uil-message button__icon" ></i>
              </button>
            </div>

          </form>

          <div className="contact__info">
            <div data-aos="fade-right" className="contact__card">
              <i className="uil uil-phone contact__card-icon"></i>
              <h3 className="contact__card-title">Call me on</h3>
              <p className="contact__card-data">+1 (838) 895-1625</p>
            </div>

            <div data-aos="fade-up" className="contact__card">
              <i className="uil uil-envelope contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <p className="contact__card-data">praneethyennam2804@gmail.com</p>
            </div>

            <div data-aos="fade-left" className="contact__card">
              <i className="uil uil-map-marker contact__card-icon"></i>
              <h3 className="contact__card-title">Location</h3>
              <p className="contact__card-data">Albany, NY</p>
            </div>
          </div>

          <div className="contact__social">
            <a  href="https://github.com/Praneeth-22" className="contact__social-link" target="_blank" rel="noreferrer">
              <i className="uil uil-github"></i>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/praneethyennam/" className="contact__social-link" target="_blank" rel="noreferrer">
              <i className="uil uil-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
