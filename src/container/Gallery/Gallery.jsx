/*This Page Handles The Section Right Under The Awards Section*/
import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

/*galleryImages Will Be Used To Map The Images That Will Be In The Gallery*/
const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  
  /*Handles The Scrolling Functionality To Scroll Through The Images In The Gallery Using The BsArrowLeftShort and BsArrowRightShort onClick*/
  const scrollRef = React.useRef(null);
  
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  
  return (
    <div className='app__gallery flex__center'>

      <div className='app__gallery-content'>
        <SubHeading title='Instagram'/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAAAAA', marginTop: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  );
};

export default Gallery;
