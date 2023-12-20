import React from 'react';
import { Link } from 'react-router-dom';

const candidateDetails = {
  firstName: 'Prem Rathan',
  highestDegreePassoutYear: 'April-2024',
  technologiesWorkedWith: [
    'React',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'SQL',
    'NodeJS',
    'Bootstrap',
  ],
};

const LandingPage = () => {
  const downloadResume = () => {
    window.open(
      'https://drive.google.com/file/d/1m0rrSsW7LyuSVQj75ozSJkax5lc_XPB9/view'
    );
  };

  return (
    <div style={{ padding: '10px' }}>
      <h1>First Name: {candidateDetails.firstName}</h1>
      <p>Highest Degree Passout Year: {candidateDetails.highestDegreePassoutYear}</p>
      <p>Technologies/Languages: {candidateDetails.technologiesWorkedWith.join(', ')}</p>
      <button type="button" onClick={downloadResume}>
        Download Resume
      </button>
      <p>
        Click here to Calculate your BMI:{' '}
        <Link to="/bmi-calculator">
          <button type="button">BMI Calculator</button>
        </Link>
      </p>
    </div>
  );
};

export default LandingPage;
