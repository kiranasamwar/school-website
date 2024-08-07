import React from 'react';
import './AboutUs.css';

const aboutUsData = {
  history: "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.",
  vision: "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
  mission: "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
  principalMessage: "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.",
  infrastructure: [
    "State-of-the-art science and computer labs",
    "Spacious and well-equipped classrooms",
    "Library with a vast collection of books and digital resources",
    "Sports facilities including a playground, gymnasium, and swimming pool"
  ]
};

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <section className="about-us-history">
        <h2>History</h2>
        <p>{aboutUsData.history}</p>
      </section>
      <section className="about-us-vision">
        <h2>Vision</h2>
        <p>{aboutUsData.vision}</p>
      </section>
      <section className="about-us-mission">
        <h2>Mission</h2>
        <p>{aboutUsData.mission}</p>
      </section>
      <section className="about-us-principal-message">
        <h2>Principal's Message</h2>
        <p>{aboutUsData.principalMessage}</p>
      </section>
      <section className="about-us-infrastructure">
        <h2>Infrastructure and Facilities</h2>
        <ul>
          {aboutUsData.infrastructure.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
