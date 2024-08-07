import React from 'react';
import './Students.css';

const studentData = [
  {
    title: "Extracurricular Activities",
    description: "Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club"
  },
  {
    title: "Clubs and Societies",
    description: "Literary Society, Environmental Club, Astronomy Club, Coding Club"
  },
  {
    title: "Achievements",
    description: "John Smith - National Level Math Olympiad Winner, Sarah Lee - Gold Medalist in State Swimming Championship, Tech Innovators Club - Winners of Inter-School Robotics Competition"
  },
  {
    title: "Student Council",
    description: "President: Amy Parker, Grade 12, Vice President: Rajiv Mehta, Grade 11, Secretary: Lisa Wong, Grade 10"
  }
];

const Student = () => {
  return (
    <div className="student-container">
      <h1 className="student-title">Life at Springdale</h1>
      {studentData.map((section, index) => (
        <div key={index} className="student-section">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
      ))}

      <div className="student-cards">
        {studentData.map((section, index) => (
          <div key={index} className="student-card">
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <span className="badge">Learn More</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student;
