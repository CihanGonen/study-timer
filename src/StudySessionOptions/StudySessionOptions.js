
const StudySessionOptions = ({disableButton,sessionLength,setSessionLength})=>{
  
  const setTimer = (diff)=>{
    if(!(sessionLength+diff>60) && !(sessionLength+diff<1) ){
      let newSessionLength = sessionLength+diff;
      setSessionLength(newSessionLength);
    }
  }

  const getClass=()=>{
    if(disableButton)
      return 'bg-gray-300 w-8 p-2 rounded-md cursor-default'
    else
      return 'bg-gray-200 w-8 p-2 rounded-md cursor-pointer'
  }

  return(
    <div className="pr-14 sol flex flex-col justify-center items-center space-y-5">
    <h1 className="text-gray-200 text-xl lg:text-3xl text-center w-20 lg:w-auto">Study Session</h1>
    <p className="text-gray-200 text-lg lg:text-xl">{sessionLength}</p>
    <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
      <button disabled={disableButton} onClick={()=>setTimer(-5)} className={getClass()}>
      <i class="fas fa-angle-double-down"></i>
      </button>
      <button disabled={disableButton} onClick={()=>setTimer(-1)} className={getClass()}>
      <i class="fas fa-angle-down"></i>
      </button>
      <button disabled={disableButton} onClick={()=>setTimer(1)} className={getClass()}>
        <i class="fas fa-angle-up"></i>
        </button>
      <button disabled={disableButton} onClick={()=>setTimer(5)} className={getClass()}>
        <i class="fas fa-angle-double-up"></i>
        </button>
    </div>
  </div>
  )
}


export default StudySessionOptions;

