import React, { useState } from 'react';
import './Experience.css';
import Modal from './Modal'; // We'll create this component

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Open modal with selected item data
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Combined timeline data (both work experience and education)
  const timelineData = [
    {
      title: "Full Stack Developer",
      organization: "NYS Insurance Fund",
      period: "September 2024 - Present",
      location: "Albany, New York",
      details: null,
      position: "left", // left side of timeline
      responsibilities: [
        "Built REST APIs in C# and .NET Core, boosting data exchange and cutting down response time by 30%.",
        "Wrote optimized LINQ queries and improved Oracle SQL stored procedures, reducing execution time by 40%.",
        "Reduced manual processes by 20% by automating and monitoring job scheduling using ActiveBatch and UiPath.",
        "Cooperated to the management and improvement of CI/CD pipelines operating Azure DevOps, Organizing deployment processes and accelerating release cycles by 10%.",
        "Designed dynamic front-end experiences using React.js and JavaScript, utilizing state management hooks to optimize performance and deliver seamless user interfaces."
      ]
    },
    {
      title: "Research Engineer",
      organization: "University at Albany, SUNY",
      period: "June 2024 - August 2024",
      location: "Albany, New York",
      position: "right", // right side of timeline
      responsibilities: [
        "Implemented code changes and bug fixes to improve the performance of collaborative discussion features by 15%.",
        "Analyzed application logs, debugged issues, and documented resolutions leading to a 20% improvement in response time.",
      ]
    },
    {
      title: "Web Design Developer",
      organization: "Center for Technology in Government",
      period: "January 2023 - May 2024",
      location: "Albany, New York",
      position: "left", // right side of timeline
      responsibilities: [
        "Developed and revamped the Message Design Dashboard for FEMA’s Wireless Emergency Alerts (WEA), increasing user satisfaction by 30% through better Next.js UI Components and system performance.",
        "Created the Lexicon Editor Application, a JSON management tool, making data handling 40% more efficient by re-structuring import, edit, and export functions.",
        "Honed AWS Cognito authentication, simplifying credential setup time by 70% through revised system workflows.",
        "Improved test automation by debugging and updating Cypress End-to-End test scripts, expanding test coverage by 20%.",
        "Implemented Django JWT authentication and permissions, ensuring secure user access and data protection."
      ]
    },
    {
      title: "M.S in Computer Science",
      organization: "University at Albany, SUNY",
      period: "Aug 2023 - May 2025",
      location: "Albany, NY",
      // details: "CGPA: 3.57/4.0",
      position: "right", // right side of timeline
      responsibilities: [
        "Graduated with a GPA of 3.57/4.0, specializing in Computer and Information Sciences.",
        // "Pursued advanced coursework in Topological Data Analysis (TDA), applying topological methods to extract insights from complex datasets",
        // "Mastered Applied Statistics fundamentals, including hypothesis testing, regression analysis, and Bayesian methods for predictive modeling and experimental design",
        // "Developed a lung cancer prediction model using regression analysis and machine learning techniques, achieving 87% accuracy on validation datasets",
        // "Balanced rigorous academic requirements while working as a Student Assistant at the New York State Department of Health (NYSDOH)"
      ]
    },
    {
      title: "B.Tech in Computer Science",
      organization: "JNTU Hyderabad",
      period: "June 2018 - May 2022",
      location: "Hyderabad, India",
      // details: "CGPA: 3.4/4.0",
      position: "left", // left side of timeline
      responsibilities: [
        "Graduated with a B.Tech in Computer Science, achieving a CGPA of 3.4/4.0.",
      ]
    }
  ];

  return (
    <section className="experience section" id="experience">
      <h2 data-aos="fade-in" className="section__title">Experience</h2>
      <span data-aos="fade-in" className="section__subtitle">Career Milestones & Learning Paths</span>

      <div className="experience__container container">
        <div className="experience__sections">
          {timelineData.map((item, index) => (
            <div 
              className="experience__data" 
              key={index}
              onClick={() => openModal(item)}
            >
              {item.position === "left" ? (
                <>
                  <div data-aos="fade-right" className="experience__content">
                    <h3 className="experience__title">{item.title}</h3>
                    <span className="experience__company">{item.organization}</span>
                    <div className="experience__calendar">
                      <i className="uil uil-calendar-alt"></i> {item.period}
                    </div>
                    <div className="experience__location">
                      <i className="uil uil-location-point"></i> {item.location}
                    </div>
                    {item.details && (
                      <div className="experience__details">{item.details}</div>
                    )}
                  </div>

                  <div>
                    <span className="experience__rounder"></span>
                    {index !== timelineData.length - 1 && <span className="experience__line"></span>}
                  </div>

                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  
                  <div>
                    <span className="experience__rounder"></span>
                    {index !== timelineData.length - 1 && <span className="experience__line"></span>}
                  </div>

                  <div data-aos="fade-left" className="experience__content">
                    <h3 className="experience__title">{item.title}</h3>
                    <span className="experience__company">{item.organization}</span>
                    <div className="experience__calendar">
                      <i className="uil uil-calendar-alt"></i> {item.period}
                    </div>
                    <div className="experience__location">
                      <i className="uil uil-location-point"></i> {item.location}
                    </div>

                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal component */}
      {isModalOpen && selectedItem && (
        <Modal onClose={closeModal}>
          <div className="modal__header">
            <h3>{selectedItem.title}</h3>
            <h4>{selectedItem.organization}</h4>
            <div className="modal__period">
              <i className="uil uil-calendar-alt"></i> {selectedItem.period}
            </div>
            <div className="modal__location">
              <i className="uil uil-location-point"></i> {selectedItem.location}
            </div>
          </div>
          <div className="modal__body">
            <h4>Responsibilities:</h4>
            <ul className="modal__responsibilities">
              {selectedItem.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Experience;
