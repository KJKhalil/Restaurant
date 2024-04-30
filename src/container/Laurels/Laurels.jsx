/*The Awards Button On The Navbar Will Take You To This Section*/
import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

/*const AwardCard Sets Up The Format Of The Content Under div 'app__laurels-awards*/
const AwardCard = ({ award: { imgUrl, title, subtitle} }) => (
  <div className='app__laurels-awards__card'>
    <img src={imgUrl} alt='awards'/>
    <div className='app__laurels-awards__card-content'>
      <p className='p__cormorant' style={{ color: '#DCCA87'}}>{title}</p>
      <p className='p__opensans'>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    
    <div className='app__wrapper_info'>
      <SubHeading title='Awards &  Recognition'/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>

      {/*Inputs The data  From data.js const awards Into The Format AwardCard Dictates.*/}
      <div className='app__laurels-awards'>
        {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
      </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.laurels} alt='Laurels Img'/>
    </div>
  </div>
);

export default Laurels;
