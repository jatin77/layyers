import React from 'react';
import { IoIosSend, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
const FooterSearch = () => {
  return (
    <div className='footer-search'>
      <div className='footer-search-bar'>
        <label>keep me informed</label>
        <div className='footer-search-bar-input'>
          <input type='text' placeholder='@email address' />
          <span className='footer-sendIcon'>
            <IoIosSend />
          </span>
        </div>
      </div>
      <div className='footer-search-social'>
        <p>follow layers</p>
        <div>
          <span>
            <IoLogoTwitter />
          </span>
          <span>
            <FaFacebookF />
          </span>
          <span>
            <IoLogoInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterSearch;
