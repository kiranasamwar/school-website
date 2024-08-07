import React from 'react';
import './Faculty.css';

const facultyData = [
  { name: "John Doe", role: "Principal", qualification: "M.Ed", experience: "20 years of experience in educational administration" },
  { name: "Jane Smith", role: "Vice Principal", qualification: "M.Sc. in Physics", experience: "15 years of teaching experience" },
  { name: "Emily Johnson", role: "English Teacher", qualification: "M.A. in English", experience: "10 years of teaching experience" },
  { name: "Michael Brown", role: "Mathematics Teacher", qualification: "M.Sc. in Mathematics", experience: "8 years of teaching experience" },
  { name: "Sophia Davis", role: "Science Teacher", qualification: "M.Sc. in Chemistry", experience: "12 years of teaching experience" },
  { name: "David Wilson", role: "Computer Science Teacher", qualification: "B.Tech in Computer Science", experience: "5 years of teaching experience" }
];

const Faculty = () => {
  return (
    <div className="faculty-container">
      <h1 className="faculty-title">Our Esteemed Faculty</h1>
      <div className="faculty-cards">
        {facultyData.map((faculty, index) => (
          <div key={index} className="faculty-card">
            <div className="faculty-info">
              <h2>{faculty.name}</h2>
              <h3>{faculty.role}</h3>
              <p><strong>Qualification:</strong> {faculty.qualification}</p>
              <p><strong>Experience:</strong> {faculty.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
