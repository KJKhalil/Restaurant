import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id='login'>
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'></div>

    <div className='app__footer-links__logo'></div>

    <div className='app__footer-links__work'></div>

    <div className='footer__copyright'></div>
  </div>
);

export default Footer;
