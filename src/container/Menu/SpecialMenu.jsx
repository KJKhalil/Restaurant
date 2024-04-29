/*The Menu Button On The Navbar Will Take You To This Section*/
import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    
    <div className='app__specialMenu-title'>
      <SubHeading title='A Menu That Fits Your Palette'/>
      <h1 className='headtext__cormorant'>Today’s Special</h1>
    </div>

    <div className='app__specialMenu-menu'>

      <div className='app__specialMenu-menu__wine flex__center'>
        <p className='app__specialMenu-menu__heading'>Wine & Beer</p>
        {/*Uses The Data In const.wines From data.js/constants To Fill In The Content*/}
        <div className='app__specialMenu-menu__items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu__img'>
        <img src={images.menu} alt='Menu Img'/>
      </div>

      <div className='app__specialMenu-menu__cocktails flex__center'>
        <p className='app__specialMenu-menu__heading'>Cocktails</p>
        {/*Uses The Data In const.cocktails From data.js/constants To Fill In The Content*/}
        <div className='app__specialMenu-menu__items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
    </div> 

    <div style={{ marginTop: 15}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
