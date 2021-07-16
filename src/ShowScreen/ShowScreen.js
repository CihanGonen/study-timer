const ShowScreen = ({imgSrc,artist,useLength,seconds})=>{

  const cleanTime = (input)=>{
    let strInput = String(input);
    if(strInput.length<2){
      strInput = '0'+strInput;
    }
    return strInput;
  }

  return(
    <div className="row-span-2 flex flex-col space-y-5 justify-center items-center">
      <div className="flex flex-col items-center w-80 relative">
         <div className="bg-black opacity-70 z-10 border border-white p-2 rounded-lg absolute text-gray-100 top-3 text-5xl font-medium">
             {cleanTime(useLength)}:{cleanTime(seconds)}
        </div>
        <img className="rounded-lg opacity-80" alt="Theme" src={imgSrc}></img>
        <p className="text-gray-500 text-sm text-center">gif is from <a className="text-gray-400 text" href={artist} target='_blank'>here</a></p>
      </div>
    </div>
  )
}

export default ShowScreen;