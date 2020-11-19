import React from 'react';
import '../../css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TripButton = ({ country, icon, href }) => {
  return (
    <a className='App-link' href={href} target='_blank' rel='noreferrer'>
      {`Find trips to ${country}`} <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default TripButton;
