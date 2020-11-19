import React from 'react';
import '../../css/styles.css';

const Footer = () => {
  return (
    <footer className='footer'>
      {/* <span>Powered by Skyscanner, Travel-Advisory & API-SPORTS</span> */}
      <p>
        &copy; 2020 Sabrina Palm - Hackathon 2020 (
        <a
          href='https://www.etraveligroup.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          etraveligroup.com
        </a>
        )
      </p>
    </footer>
  );
};

export default Footer;
