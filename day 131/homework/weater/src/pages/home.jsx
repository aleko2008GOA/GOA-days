import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

let dataToExport = [];

function Home() {
  const [inputVal, setInputVal] = useState('');
  const [data, setData] = useState([]);

  useEffect(() =>{
    getWeather(`http://api.weatherapi.com/v1/current.json?key=14b5b6894ee44d0a9f8123810242908&q=${inputVal}&aqi=no`);
  }, [inputVal]);

  useEffect(() =>{
    if(data.length == 3) dataToExport = data;
  }, [data]);

  function handleChange(e){
    setInputVal(e.target.value);
  }

  async function getWeather(data){
    const responce = await fetch(data);
    const api_data = await responce.json();
    
    setData(api_data.error ? 'No location like that' : [api_data.current.temp_c, api_data.current.wind_kph, api_data.current.feelslike_c]);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 p-4">
      <form className="mb-6">
        <label className="text-lg font-semibold">City:</label><br />
        <input onChange={handleChange} value={inputVal} placeholder='e.g London' className="mt-2 p-2 border-2 border-blue-400 rounded-lg w-60 focus:outline-none focus:ring focus:border-blue-500"
        />
      </form>

      <div className="text-center">
        {data.length == 3 ? (
          <p className="text-lg">
            All good, visit site {'->'}
            <Link to={'/weather'} className="text-blue-500 hover:underline">
              <h1 className="text-2xl font-bold">{data[0]}°C</h1>
              <img width="200" src="https://amindi.ge/static/img/07.png" className="mt-2" />
            </Link>
          </p>
        ) : (
          <p className="text-red-500">Please enter a correct city</p>
        )}
      </div>
    </div>
  );
}

export { Home, dataToExport };
