const BreakSessionOptions = ({disableButton,breakLength,setBreakLength})=>{

  const setTimer = (diff)=>{
    if(!(breakLength+diff>60) && !(breakLength+diff<1) ){
      let newBreakLength = breakLength+diff;
      setBreakLength(newBreakLength);
    }
  }

  const getClass=()=>{
    if(disableButton)
      return 'bg-gray-300 w-8 p-2 rounded-md cursor-default'
    else
      return 'bg-gray-200 w-8 p-2 rounded-md cursor-pointer'
  }

  return(
    <div className="pl-14 sag flex flex-col justify-center items-center space-y-5">
            <h1 className="text-gray-200 text-sm md:text-xl lg:text-3xl text-center w-20 lg:w-auto"> Break Session</h1>
            <p className="text-gray-200 text-lg lg:text-xl">{breakLength}</p>
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
              <button disabled={disableButton} onClick={()=>setTimer(-5)} className={getClass()}>
              <i className="fas fa-angle-double-down"></i>
              </button>
              <button disabled={disableButton} onClick={()=>setTimer(-1)} className={getClass()}>
              <i className="fas fa-angle-down"></i>
              </button>
              <button disabled={disableButton} onClick={()=>setTimer(1)} className={getClass()}>
                <i className="fas fa-angle-up"></i>
                </button>
              <button disabled={disableButton} onClick={()=>setTimer(5)} className={getClass()}>
                <i className="fas fa-angle-double-up"></i>
                </button>
            </div>
          </div>
  )
}

export default BreakSessionOptions;