import {useState} from 'react';

import AmbianceOptions from './AmbianceOptions/AmbianceOptions';

function App() {
  const [sounds] = useState([
    {
      src: "./sounds/fireplace-looped.mp3",
      img_src: "../public/gifs/ates.gif",
      artist: "http://imperfectlyperfectdude.tumblr.com/post/46442896724",
      class: "fire-wrapper",
    },
    {
      src: "./sounds/nature-looped.mp3",
      img_src: "../public/gifs/nature.gif",
      artist: "https://allyouneediswall.tumblr.com/post/161523565885",
      class: "nature-wrapper",
    },
    {
      src: "./sounds/ocean-looped.mp3",
      img_src: "../public/gifs/ocean.gif",
      artist: "http://chrs.cblls.com/",
      class: "ocean-wrapper",
    },
    {
      src: "./sounds/rain-looped.mp3",
      img_src: "../public/gifs/rain.gif",
      artist: "https://www.reddit.com/r/Cinemagraphs/comments/8smfms/im_dying_for_more_like_this/",
      class: "rain-wrapper",
    },
    {
      src: "./sounds/wind-looped.mp3",
      img_src: "../public/gifs/wind.gif",
      artist: "http://jjjjjjjjjjohn.tumblr.com/",
      class: "wind-wrapper",
    },
  ])

  const [songIndex,setSongIndex] = useState(0);

  return (
    <div className="page-wrapper w-screen h-screen gif-wraper grid grid-rows-4">
      <AmbianceOptions 
        sounds={sounds}
        songIndex={songIndex}
        setSongIndex={setSongIndex}  
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
