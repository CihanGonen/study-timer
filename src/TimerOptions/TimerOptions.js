import {Component} from 'react'
import './TimerOptions.css';

class TimerOptions extends Component{
  constructor(props){
    super(props);
    let {isPlaying, setIsPlaying,disableButton,setDisableButton,sessionLength,breakLength,sessionTime,seconds,setSeconds,useLength,setUseLength} = this.props;
    this.state={
      clock:0,
      text:'Study',
      changeText:()=>{
        if(this.text==='Study'){
          this.text='Break';
        }
        else{
          this.text='Study';
        }
      },
      timer : ()=>{
        this.state.clock = setInterval(()=>{ 
          console.log(isPlaying);
          console.log(seconds);
          if(seconds===0 && useLength===0){
            /*audio.play();*/
            if(sessionTime){
              sessionTime=false;
              this.state.changeText();
              useLength=breakLength;
              setUseLength(breakLength);
            }
            else{
              sessionTime=true;
              this.state.changeText();
              setUseLength(sessionLength);
            }
          }
          else if(seconds===0){
            seconds=59;
            setSeconds(59);
            useLength-=1;
            setUseLength(useLength);
          }
          else{
            seconds-=1;
            setSeconds(seconds);
          }
        },1000)
      },
      stopTimer: ()=>{
        clearInterval(this.state.clock);
        disableButton=false;
        setDisableButton(disableButton);
      },
      startStop : ()=>{
        isPlaying = !isPlaying;
        setIsPlaying(isPlaying);
        if(isPlaying){
          disableButton=true;
          setDisableButton(disableButton);
          this.state.timer(); 
        }
        else{
          this.state.stopTimer();
        }
      }
    }
  }


  render(){
    return(
    <div className="pb-2">
      <div className='flex justify-center pb-2'>
         <p className="text-xl text-gray-300">{this.state.text}</p>
      </div>
      <div className='flex justify-center space-x-10'>
        {/* burda koşul olcak display ederken */}
          <button onClick={this.state.startStop}>
            { this.isPlaying ? <i className="fas fa-pause play"></i> : <i className="fas fa-play play"></i>}
          </button>
          <button><i className="fas fa-redo-alt play"></i></button>
      </div>
    </div>
    )
  }
  
}

export default TimerOptions;