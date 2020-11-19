import React from 'react';

const ModalCloseButton = ({ closeNav }) => {
  return (
    <button className='closebtn' onClick={closeNav}>
      &times;
    </button>
  );
};

export default ModalCloseButton;
