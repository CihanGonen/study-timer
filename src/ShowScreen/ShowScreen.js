const ShowScreen = ({imgSrc})=>{
  return(
    <div className="row-span-2 flex flex-col space-y-5 justify-center items-center">
    <img className="rounded-lg opacity-80 w-80" alt="Theme" src={imgSrc}></img>
    </div>
  )
}

export default ShowScreen;