import React from 'react';
import { IoLogoInstagram } from 'react-icons/io';
import img1 from '../../styles/images/active-activity-adventure-532803.jpg';
import img2 from '../../styles/images/adult-adventure-backpack-1230302.jpg';
import img3 from '../../styles/images/adventure-backpacker-blue-2450296.jpg';
import img4 from '../../styles/images/background-beautiful-camp-730426.jpg';
import img5 from '../../styles/images/bags-blur-bottles-571150.jpg';
import img6 from '../../styles/images/camp-camper-camping-2516423.jpg';
const Insta = () => {
  return (
    <div className='insta'>
      <div className='insta-link'>
        <IoLogoInstagram className='insta-link-icon' />
        <p>@layer_outdoorgears</p>
      </div>
      <div className='insta-content'>
        <img className='insta-content-img1' src={img1} alt='' />
        <img className='insta-content-img2' src={img2} alt='' />
        <img className='insta-content-img3' src={img3} alt='' />
        <img className='insta-content-img4' src={img4} alt='' />
        <img className='insta-content-img5' src={img5} alt='' />
        <img className='insta-content-img6' src={img6} alt='' />
        <img className='insta-content-img7' src='' alt='' />
      </div>
    </div>
  );
};

export default Insta;
