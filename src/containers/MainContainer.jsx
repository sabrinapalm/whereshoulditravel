import React, { useState } from 'react';
import '../css/styles.css';
import MapChart from '../components/Map/MapChart';
import Modal from '../components/Modal/Modal';
import Footer from '../components/Footer/Footer';

const MainContainer = () => {
  const [modalContent, setModalContent] = useState({});

  return (
    <>
      <div className='App bg'>
        <div className='container' id='main'>
          <Modal modalContent={modalContent} />
          <MapChart setModalContent={setModalContent} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
