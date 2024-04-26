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
      
      {/*Content On The Left Side Of The Section*/}
      <div className='app__aboutus-content__about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='About Spoon' className='spoon__img'/>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Find Out More</button>
      </div>

      <div className='app__aboutus-content__knife flex__center'>
        <img src={images.knife} alt='About Knife'/>
      </div>

      {/*Content On The Right Side Of The Section*/}
      <div className='app__aboutus-content__history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='About Spoon' className='spoon__img'/>
        <p className='p__opensans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type='button' className='custom__button'>Find Out More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
