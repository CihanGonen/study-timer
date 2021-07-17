import {useRef,useEffect} from 'react';

import './AmbianceOptions.css';

function AmbianceOptions({sounds,songIndex,setSongIndex,setBgColor,setImgSrc,setArtist}) {

  const audioEl = useRef(null);

  const changeMusic = (index)=>{
      setSongIndex(index);
      setBgColor(sounds[index].bg);
      setImgSrc(sounds[index].img_src);
      setArtist(sounds[index].artist);
  }

  useEffect(()=>{
    console.log(songIndex);
    audioEl.current.play();
  },[songIndex,sounds])

  return (
    <div className="row-span-1 flex justify-around items-center">
    <audio loop src={sounds[songIndex].src} ref={audioEl}></audio>

    {songIndex===0 ? <button className="bg-gray-100 opacity-70 p-3 rounded-md btn" value="home" onClick={
      ()=>changeMusic(5)
    }> <i class="fas fa-home pr-1"></i>No Ambiance</button>
    :<button className="animate__animated animate__flipInY bg-gray-100 opacity-70 p-3 rounded-md btn" value="fire" onClick={
      ()=>changeMusic(0)
    }><i className="fas fa-fire pr-1 fire"></i>Fire Place</button>}

    {songIndex===1 ? <button className="bg-gray-100 opacity-70 p-3 rounded-md btn" value="home" onClick={
      ()=>changeMusic(5)
    }> <i class="fas fa-home pr-1"></i>No Ambiance</button>
    :<button className="bg-gray-100 opacity-70 p-3 rounded-md btn" value="nature" onClick={
      ()=>changeMusic(1)
    }><i className="fas fa-leaf pr-1 nature"></i>Nature</button>}

    {songIndex===2 ? <button className="bg-gray-100 opacity-70 p-3 rounded-md btn" value="home" onClick={
      ()=>changeMusic(5)
    }> <i class="fas fa-home pr-1"></i>No Ambiance</button>
    :<button className="bg-gray-100 opacity-70 p-3 rounded-md btn" value="ocean" onClick={
      ()=>changeMusic(2)
    }><i className="fas fa-water pr-1 ocean"></i>Ocean</button>}

    {songIndex===3 ? <button className="bg-gray-100 opacity-70 p-3 rounded-md btn" value="home" onClick={
      ()=>changeMusic(5)
    }> <i class="fas fa-home pr-1"></i>No Ambiance</button>
    :<button className="bg-gray-100 opacity-70 p-3 rounded-md btn" value="rain" onClick={
      ()=>changeMusic(3)
    }><i className="fas fa-cloud-showers-heavy pr-1 rain"></i>Rain</button>}
    
    {songIndex===4 ? <button className="bg-gray-100 opacity-70 p-3 rounded-md btn" value="home" onClick={
      ()=>changeMusic(4)
    }> <i class="fas fa-home pr-1"></i>No Ambiance</button>
    :<button className="bg-gray-100 opacity-70 p-3 rounded-md btn" value="wind" onClick={
      ()=>changeMusic(4)
    }><i className="fas fa-wind pr-1 wind"></i>Wind</button>} 
    
  </div>
  );
}

export default AmbianceOptions;