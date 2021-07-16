import {useState} from 'react';

import AmbianceOptions from './AmbianceOptions/AmbianceOptions';
import ShowScreen from './ShowScreen/ShowScreen';
import TimerOptions from './TimerOptions/TimerOptions';

function App() {
  const [sounds] = useState([
    {
      src: "./sounds/fireplace-looped.mp3",
      img_src: "./gifs/ates.gif",
      artist: "http://imperfectlyperfectdude.tumblr.com/post/46442896724",
      bg: "fire-bg",
    },
    {
      src: "./sounds/nature-looped.mp3",
      img_src: "./gifs/nature.gif",
      artist: "https://allyouneediswall.tumblr.com/post/161523565885",
      bg: "nature-bg",
    },
    {
      src: "./sounds/ocean-looped.mp3",
      img_src: "./gifs/ocean.gif",
      artist: "http://chrs.cblls.com/",
      bg: "ocean-bg",
    },
    {
      src: "./sounds/rain-looped.mp3",
      img_src: "./gifs/rain.gif",
      artist: "https://www.reddit.com/r/Cinemagraphs/comments/8smfms/im_dying_for_more_like_this/",
      bg: "rain-bg",
    },
    {
      src: "./sounds/wind-looped.mp3",
      img_src: "./gifs/wind.gif",
      artist: "http://jjjjjjjjjjohn.tumblr.com/",
      bg: "wind-bg",
    },
    {
      src:'',
      img_src:'./gifs/start.gif',
      artist:'http://facebook.com/tunadunn',
      bg:'start-bg'}
  ])

  const [songIndex,setSongIndex] = useState(5);
  const [bgColor,setBgColor] = useState('start-bg');
  const [imgSrc,setImgSrc] = useState('./gifs/start.gif')
  const [artist,setArtist] = useState('http://facebook.com/tunadunn')

  const [isPlaying,setIsPlaying]= useState(false);
  const [disableButton,setDisableButton] = useState(false);
  const [sessionLength,setSessionLength] = useState(25);
  const [breakLength,setBreakLength] = useState(5);
  const [useLength,setUseLength] = useState(sessionLength);
  const [seconds,setSeconds] = useState(0);
  const [sessionTime,setSessionTime] = useState(true);

  return (
    <div className={"page-wrapper w-screen h-screen gif-wraper grid grid-rows-6 "+bgColor}>
      <AmbianceOptions 
        sounds={sounds}
        songIndex={songIndex}
        setSongIndex={setSongIndex}  
        setBgColor = {setBgColor}
        setImgSrc= {setImgSrc}
        setArtist = {setArtist}
      /> 
      {/* <StudySessionOptions/> */}
      <div>
        <TimerOptions 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying} 
          disableButton={disableButton}
          setDisableButton={setDisableButton} 
          sessionLength={sessionLength}
          breakLength={breakLength}
          sessionTime={sessionTime}
          seconds={seconds}
          setSeconds={setSeconds}
          useLength={useLength}
          setUseLength={setUseLength}
        />
        <ShowScreen 
          imgSrc={imgSrc} 
          artist={artist} 
          useLength={useLength} 
          seconds={seconds}
        /> 
      </div>

      {/* <BreakSessionOptions/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
