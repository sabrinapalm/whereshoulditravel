import React from 'react';
import '../../css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Statistics = ({ faUsers, faChartLine, cases }) => {
  return (
    <div className='covid-container'>
      <h3>Active covid-19 cases</h3>
      <div className='covid-cases'>
        <div>
          <FontAwesomeIcon icon={faUsers} /> {cases.active}
        </div>
        <div>
          <FontAwesomeIcon icon={faChartLine} /> {cases.new}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
