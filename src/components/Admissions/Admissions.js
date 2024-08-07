import React from 'react';
import './Admissions.css';

const admissionData = {
  process: "Admission forms are available for download. Submit the completed form along with required documents at the school office.",
  criteria: "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.",
  importantDates: [
    { date: "March 1st", event: "Admission Form Availability" },
    { date: "March 31st", event: "Last Date for Submission" },
    { date: "April 15th", event: "Entrance Test" },
    { date: "April 30th", event: "Announcement of Results" }
  ]
};

const Admissions = () => {
  return (
    <div className="admissions-container">
      <h1 className="admissions-title">Admissions</h1>
      <section className="admissions-process">
        <h2>Admission Process</h2>
        <p>{admissionData.process}</p>
      </section>
      <section className="admissions-criteria">
        <h2>Admission Criteria</h2>
        <p>{admissionData.criteria}</p>
      </section>
      <section className="admissions-dates">
        <h2>Important Dates</h2>
        <ul>
          {admissionData.importantDates.map((date, index) => (
            <li key={index} className="date-item">
              <span className="date">{date.date}</span> - <span className="event">{date.event}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Admissions;
