/*The Login / Register Button On The Navbar Will Take You To This Section*/
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id='login'>
    
    {/*Import FooterOverlay And Newsletter Into The Footer*/}
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links__contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
      </div>

      <div className='app__footer-links__logo'>
        <img src={images.gericht} alt='Footer Logo'/>
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} className='spoon__img'  alt='Spoon' style={{ margintop: 15 }}/>
        <div className='app__footer-links__icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>

      <div className='app__footer-links__work'>
        <h1 className='app__footer-headtext'>Work Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am -12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00am -11:00 pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Gerícht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
