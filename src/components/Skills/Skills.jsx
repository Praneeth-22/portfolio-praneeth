import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'Java', icon: 'bx bxl-java' },
    { name: 'Python', icon: 'bx bxl-python' },
    { name: 'Node.js', icon: 'bx bxl-nodejs' },
    { name: 'JavaScript', icon: 'uil uil-java-script' },
   {name: 'TypeScript', icon: 'bx bxl-typescript' },
   { name: 'PL/SQL', icon: 'bx bxl-data' },
   { name: 'C#', icon: 'bx bx-code-alt' },
    { name: 'ASP.NET Core', icon: 'bx bx-code' },
    { name: 'Express', icon: 'uil uil-server' },
    { name: 'React', icon: 'uil uil-react' },
    { name: 'Next.js', icon: 'bx bxl-nextjs' },
    { name: 'HTML5', icon: 'uil uil-html5' },
    { name: 'CSS3', icon: 'uil uil-css3-simple' },
    { name: 'Bootstrap', icon: 'bx bxl-bootstrap' },
    { name: 'Tailwind CSS', icon: 'bx bxl-tailwind-css' },
    { name: 'MongoDB', icon: 'bx bxl-mongodb' },
    { name: 'PostgreSQL', icon:'bx bxl-postgresql'},
    { name: 'Git', icon: 'uil uil-github' },
    { name: 'Docker', icon: 'uil uil-docker' },
    { name: 'AWS', icon: 'bx bxl-aws' },
    { name: 'Azure', icon: 'bx bxl-microsoft' },
    { name: 'UiPath', icon: 'bx bxl-uipath' },
    { name: 'Agile Methodologies', icon: 'bx bx-check-shield' },
    { name: 'Teamwork', icon: 'bx bx-group' },
  ];

  return (
    <section  className="skills section" id="skills">
      <h2 data-aos="fade-in" className="section__title">Skills</h2>
      <span data-aos="fade-in" className="section__subtitle">Languages & Frameworks</span>

      <div className="skills__container container">
        {skillsData.map((skill, index) => (
          <div className="skill__item" key={index}>
            <i className={skill.icon}></i>
            <span className="skill__name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;