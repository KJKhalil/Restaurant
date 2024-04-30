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

      {/*This Is Where const galleryImages Above Is Used To Map The Images Into The Gallery*/}
      <div className='app__gallery-images'>
        <div className='app__gallery-images__container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images__card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt='Gallery'/>
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
      
        {/*These Arrows Allow The User To Scroll Through The Gallery*/}
        <div className='app__gallery-images__arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
