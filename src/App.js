import {useState} from 'react';

import AmbianceOptions from './AmbianceOptions/AmbianceOptions';

function App() {
  const [sounds] = useState([
    {
      src: "./sounds/fireplace-looped.mp3",
      img_src: "../public/gifs/ates.gif",
      artist: "http://imperfectlyperfectdude.tumblr.com/post/46442896724",
      bg: "fire-bg",
    },
    {
      src: "./sounds/nature-looped.mp3",
      img_src: "../public/gifs/nature.gif",
      artist: "https://allyouneediswall.tumblr.com/post/161523565885",
      bg: "nature-bg",
    },
    {
      src: "./sounds/ocean-looped.mp3",
      img_src: "../public/gifs/ocean.gif",
      artist: "http://chrs.cblls.com/",
      bg: "ocean-bg",
    },
    {
      src: "./sounds/rain-looped.mp3",
      img_src: "../public/gifs/rain.gif",
      artist: "https://www.reddit.com/r/Cinemagraphs/comments/8smfms/im_dying_for_more_like_this/",
      bg: "rain-bg",
    },
    {
      src: "./sounds/wind-looped.mp3",
      img_src: "../public/gifs/wind.gif",
      artist: "http://jjjjjjjjjjohn.tumblr.com/",
      bg: "wind-bg",
    },
    {src:''}
  ])

  const [songIndex,setSongIndex] = useState(5);
  const [bgColor,setBgColor] = useState('start-bg');

  return (
    <div className={"page-wrapper w-screen h-screen gif-wraper grid grid-rows-4 "+bgColor}>
      <AmbianceOptions 
        sounds={sounds}
        songIndex={songIndex}
        setSongIndex={setSongIndex}  
        bgColor  = {bgColor}
        setBgColor = {setBgColor}
      /> 
      {/* <StudySessionOptions/> */}
      {/* <TimerOptions/> */}
      {/* <ShowScreen/> */}
      {/* <BreakSessionOptions/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
