import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import './Academics.css';

const CurriculumSection = ({ title, description }) => (
  <div className="academics-section">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const AcademicsContent = () => {
  const { section } = useParams();

  switch (section) {
    case 'primary':
      return (
        <CurriculumSection
          title="Primary (Grades 1-5)"
          description="English, Mathematics, Science, Social Studies, Art, Physical Education"
        />
      );
    case 'secondary':
      return (
        <CurriculumSection
          title="Secondary (Grades 6-10)"
          description="English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art"
        />
      );
    case 'senior-secondary':
      return (
        <div>
          <CurriculumSection
            title="Science Stream"
            description="Physics, Chemistry, Biology, Mathematics, Computer Science, English"
          />
          <CurriculumSection
            title="Commerce Stream"
            description="Accountancy, Business Studies, Economics, Mathematics, English"
          />
        </div>
      );
    case 'teaching-methodologies':
      return (
        <CurriculumSection
          title="Teaching Methodologies"
          description="We use a blend of traditional and modern teaching techniques to cater to different learning styles."
        />
      );
    case 'educational-resources':
      return (
        <CurriculumSection
          title="Educational Resources"
          description="Digital classrooms, interactive learning modules, and access to online educational platforms."
        />
      );
    default:
      return <div className="academics-section">Please select a section to view details.</div>;
  }
};

const Academics = () => (
  <div className="academics-container">
    <h1 className="academics-title">Academics</h1>
    <div className="academics-navigation">
      <ul>
        <li><Link to="/academics/primary">Primary (Grades 1-5)</Link></li>
        <li><Link to="/academics/secondary">Secondary (Grades 6-10)</Link></li>
        <li><Link to="/academics/senior-secondary">Senior Secondary (Grades 11-12)</Link></li>
        <li><Link to="/academics/teaching-methodologies">Teaching Methodologies</Link></li>
        <li><Link to="/academics/educational-resources">Educational Resources</Link></li>
      </ul>
    </div>
    <div className="academics-content">
      <Routes>
        <Route path=":section" element={<AcademicsContent />} />
      </Routes>
    </div>
  </div>
);

export default Academics;
