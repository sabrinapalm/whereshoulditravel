import React from 'react';
import '../../css/styles.css';

const FlightAdvisory = ({ country, message, source }) => {
  return (
    <div className='advisory-styles'>
      <h3>{country} Travel Advisory</h3>
      <p>{message}</p>
      <a href={source} target='_blank' rel='noreferrer'>
        Read more...
      </a>
    </div>
  );
};

export default FlightAdvisory;
