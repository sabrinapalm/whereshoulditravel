import React from 'react';
import '../../css/styles.css';

const FlightPrice = ({ minFlightPrice }) => {
  if (minFlightPrice) {
    return (
      <div className='price-per-person'>
        <h3 className='modal-price-text'>Price fr. {minFlightPrice} €</h3>
        <span>/per person</span>
      </div>
    );
  } else {
    return <h3 className='modal-price-text'>Price not available</h3>;
  }
};

export default FlightPrice;
