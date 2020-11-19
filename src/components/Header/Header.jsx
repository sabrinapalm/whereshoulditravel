import React from 'react';
import logo from '../../assets/around.svg';

const Header = () => {
  return (
    <header className='header'>
      <img
        className='rotate'
        src={logo}
        alt='etraveli-logo'
        width='55'
        height='55'
      />
    </header>
  );
};

export default Header;
