import {useRef,useEffect,useState} from 'react';

import './AmbianceOptions.css';

function AmbianceOptions({sounds,songIndex,setSongIndex,bgColor,setBgColor}) {

  const audioEl = useRef(null);
  const [isPlaying,setIsPlaying]= useState(false);

  const changeMusic = (index)=>{
      setSongIndex(index);
      setBgColor(sounds[index].bg);
  }

  useEffect(()=>{
    console.log(songIndex);
    audioEl.current.play();
  },[songIndex,sounds])

  return (
    <div className="row-span-1 flex justify-around items-center">
    <audio loop src={sounds[songIndex].src} ref={audioEl}></audio>
    <button className="ambiance-button bg-gray-100 opacity-70 p-3 rounded-md btn" value="fire" onClick={
      ()=>changeMusic(0)
    }><i className="fas fa-fire pr-1 fire"></i>Fire Place</button>
    <button className="ambiance-button bg-gray-100 opacity-70 p-3 rounded-md btn" value="nature" onClick={
      ()=>changeMusic(1)
    }><i className="fas fa-leaf pr-1 nature"></i>Nature</button>
    <button className="ambiance-button bg-gray-100 opacity-70 p-3 rounded-md btn" value="ocean" onClick={
      ()=>changeMusic(2)
    }><i className="fas fa-water pr-1 ocean"></i>Ocean</button>
    <button className="ambiance-button bg-gray-100 opacity-70 p-3 rounded-md btn" value="rain" onClick={
      ()=>changeMusic(3)
    }><i className="fas fa-cloud-showers-heavy pr-1 rain"></i>Rain</button>
    <button className="ambiance-button bg-gray-100 opacity-70 p-3 rounded-md btn" value="wind" onClick={
      ()=>changeMusic(4)
    }><i className="fas fa-wind pr-1 wind"></i>Wind</button>
  </div>
  );
}

export default AmbianceOptions;