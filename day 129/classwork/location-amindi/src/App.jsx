import { useState, useEffect } from 'react'

function App() {
  const [inputVal, setInputVal] = useState('');
  const [data, setData] = useState([]);

  useEffect(() =>{
    getWeather(`http://api.weatherapi.com/v1/current.json?key=14b5b6894ee44d0a9f8123810242908&q=${inputVal}&aqi=no`);
  }, [inputVal]);

  function handleChange(e){
    setInputVal(e.target.value);
  }

  async function getWeather(data){
    const responce = await fetch(data);
    const api_data = await responce.json();
    
    setData(api_data.error ? 'No location like that' : [api_data.current.temp_c, api_data.current.wind_kph, api_data.current.feelslike_c]);
  }

  return (
    <>
      <form>
        <label>City:</label><br />
        <input onChange={handleChange} value = {inputVal} placeholder='e.g London' />
      </form>
      <div>
        {data.length == 3 ? (
          <section>
            <p>{data[0]}C now</p>
            <p>{data[1]}C feels like</p>
            <p>{data[2]}kph wind</p>
          </section>
        ) : (<p>Please enter a city</p>)}
      </div>
    </>
  )
}

export default App
