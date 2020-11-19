import React from 'react';
import '../../css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FlightInfo = ({ icon, header, description }) => {
  return (
    <div className='quarantine-container'>
      <h3 className='modal-h3'>
        <FontAwesomeIcon icon={icon} />
        <span>{header}</span>
      </h3>
      <span>{description}</span>
    </div>
  );
};

export default FlightInfo;
