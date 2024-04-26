/*The About Button On The Navbar Will Take You To This Section*/
import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>

    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G Overlay'/>
    </div>

    <div className='app__aboutus-content flex__center'>

    </div>

    <div className='app__aboutus-content__knife flex__center'>
      <img src={images.knife} alt='About Knife'/>
    </div>

    <div className='app__aboutus-content__history'>

    </div>
  </div>
);

export default AboutUs;
