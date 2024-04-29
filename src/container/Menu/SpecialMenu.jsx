import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    
    <div className='app__specialMenu-title'>
    </div>

    <div className='app__specialMenu-menu'>

      <div className='app__specialMenu-menu__wine flex__center'>
      </div>

      <div className='app__specialMenu-menu__img'>
      </div>

      <div className='app__specialMenu-menu__cocktails flex__center'>
      </div>

    </div> 
     
    <div style={{ marginTop: 15}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
