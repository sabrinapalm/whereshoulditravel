import React from 'react';
import {
  faPlaneDeparture,
  faPlaneArrival,
  faAngleDoubleRight,
  faUsers,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import '../../css/styles.css';
import ModalContainer from './ModalContainer';
import ModalCloseButton from './ModalCloseButton';
import ModalHeader from './ModalHeader';
import FlightInfo from './FlightInfo';
import Statistics from './Statistics';
import FlightAdvisory from './FlightAdvisory';
import FlightPrice from './FlightPrice';
import TripButton from './TripButton';

const closeNav = () => {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginRight = '0';
  document.body.style.backgroundColor = 'white';
};

const Modal = ({ modalContent }) => {
  const { country, population, covid, minFlightPrice, advisory } = modalContent;
  const hasStatistics = covid && covid.cases && covid.cases.new;

  return (
    <aside id='mySidenav' className='slide-in-modal'>
      <ModalCloseButton closeNav={closeNav} />
      <ModalContainer>
        <ModalHeader country={country} population={population} />
        <hr />
        <FlightInfo
          icon={faPlaneDeparture}
          header={`Upon arrival in ${country}`}
          description='Quarantine information not available'
        />
        <FlightInfo
          icon={faPlaneArrival}
          header='Return trip to Sweden'
          description='Quarantine is not required'
        />
        {hasStatistics && (
          <Statistics
            faUsers={faUsers}
            faChartLine={faChartLine}
            cases={covid.cases}
          />
        )}
        <div>
          {advisory && (
            <FlightAdvisory
              country={country}
              message={advisory.message}
              source={advisory.source}
            />
          )}
        </div>
        <FlightPrice minFlightPrice={minFlightPrice} />
        <TripButton
          country={country}
          icon={faAngleDoubleRight}
          href='https://supersavertravel.se/rf/start'
        />
      </ModalContainer>
    </aside>
  );
};

export default Modal;
