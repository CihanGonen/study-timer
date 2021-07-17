import {useState,useRef} from 'react'
import './TimerOptions.css';

const TimerOptions = ({isPlaying, setIsPlaying,setDisableButton,sessionLength,setSessionLength,breakLength,setBreakLength,sessionTime,seconds,setSeconds,useLength,setUseLength}) => {
  
      const [clock,setClock]=useState(0);
      const [text,setText]= useState('Study');
      const audioEl = useRef(null);

      const changeText=()=>{
        if(sessionTime){
          setText('Study');
        }
        else{
          setText('Break');
        }
      }

      const timer = ()=>{
          let newUseLength = useLength===0 ? sessionLength : useLength;
          setUseLength(newUseLength);
          setClock(setInterval(()=>{ 
          if(seconds===0 && newUseLength===0){
            audioEl.current.play();
            if(sessionTime){
              sessionTime=false;
              changeText();
              newUseLength=breakLength;
              setUseLength(newUseLength);
            }
            else{
              sessionTime=true;
              changeText();
              newUseLength=sessionLength;
              setUseLength(newUseLength);
            }
          }
          else if(seconds===0){
            let newSeconds = seconds+=59;
            setSeconds(newSeconds);
            newUseLength = newUseLength-=1;
            setUseLength(newUseLength);
          }
          else{
            let newSeconds = seconds-=1;
            setSeconds(newSeconds);
          }
        },1000))
      }
      
      const resetter = () =>{
        audioEl.current.pause();
        audioEl.current.currentTime = 0 ;
        stopTimer();
        setDisableButton(false);
        sessionTime=true;
        changeText();
        setIsPlaying(false);
        setUseLength(0);
        setSessionLength(25);
        setBreakLength(5);
        setSeconds(0);
      }

      const stopTimer = ()=>{
        clearInterval(clock);
      }

      const startStop = ()=>{
        let newPlaying = !isPlaying;
        setIsPlaying(newPlaying);
        if(newPlaying){
          setDisableButton(true);
          timer(); 
        }
        else{
          stopTimer();
        }
      }
  
    return(
    <div className="pb-2">
      <div className='flex justify-center pb-2'>
         <p className="text-xl text-gray-300">{text}</p>
      </div>
      <audio src='./sounds/beep.mp3' ref={audioEl}></audio>
      <div className='flex justify-center space-x-10'>
        {/* burda koşul olcak display ederken */}
          <button onClick={startStop}>
            { isPlaying ? <i className="fas fa-pause play"></i> : <i className="fas fa-play play"></i>}
          </button>
          <button onClick={resetter}><i className="fas fa-redo-alt play"></i></button>
      </div>
    </div>
    )
  
}

export default TimerOptions;