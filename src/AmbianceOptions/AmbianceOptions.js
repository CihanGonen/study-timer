import './AmbianceOptions.css';

function AmbianceOptions() {
  return (
    <div className="row-span-1 flex justify-around items-center">
    <button className="ambiance-button bg-gray-100 opacity-70 p-3 rounded-md btn" value="ocean"><i class="fas fa-water pr-1 ocean"></i>Ocean</button>
    <button className="ambiance-button bg-gray-100 opacity-70 p-3 rounded-md btn" value="fire"><i class="fas fa-fire pr-1 fire"></i>Fire Place</button>
    <button className="ambiance-button bg-gray-100 opacity-70 p-3 rounded-md btn"  value="rain"><i class="fas fa-cloud-showers-heavy pr-1 rain"></i>Rain</button>
    <button className="ambiance-button bg-gray-100 opacity-70 p-3 rounded-md btn" value="nature"><i class="fas fa-leaf pr-1 nature"></i>Nature</button>
    <button className="ambiance-button bg-gray-100 opacity-70 p-3 rounded-md btn" value="wind"><i class="fas fa-wind pr-1 wind"></i>Wind</button>
  </div>
  );
}

export default AmbianceOptions;