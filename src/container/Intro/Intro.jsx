/*This Page Handles The Section Under The Chefs Section Displaying A Video */
import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {

  /*Uses React To Control The Functionality Of The Video*/
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className='app__video'>

      {/*Handles The Input Of The Video "meal"*/}
      <video
        ref={vidRef}
        src={meal}
        type='video/mp4'
        loop
        controls={false}
        muted
      />

      <div className='app__video-overlay flex__center'>
        
        {/*Handles The Play/Pause Button For The Video "meal" Using const handleVideo*/}
        <div 
          className='app__video-overlay__circle flex__center' 
          onClick={handleVideo}
        >
          {playVideo
            ? <BsPauseFill color='#FFF' fontSize={30}/>
            : <BsFillPlayFill color='#FFF' fontSize={30}/>}
        </div>
      </div>
    </div>
  );
};

export default Intro;
