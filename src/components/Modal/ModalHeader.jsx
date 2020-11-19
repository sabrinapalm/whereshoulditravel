import React from 'react';
import '../../css/styles.css';
import { roundedPopulation } from '../../helpers/helpers';

const ModalHeader = ({ country, population }) => {
  return (
    <div className='modal-header'>
      <h1 className='modal-title'>{`${country} - ${roundedPopulation(
        population
      )}`}</h1>
    </div>
  );
};

export default ModalHeader;
