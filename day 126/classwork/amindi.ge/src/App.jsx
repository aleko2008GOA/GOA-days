import { useState, useEffect } from 'react'

function App() {
  const [location, setLocation] = useState([]);
  const [temp, setTemp] = useState([]);
  
  useEffect(() =>{
    getDate('http://api.weatherapi.com/v1/current.json?key=14b5b6894ee44d0a9f8123810242908&q=London&aqi=no');
  }, []);

  async function getDate(data){
    const responce = await fetch(data);
    const api_data = await responce.json();
    
    setLocation(api_data.location);
    setTemp(api_data.current);
  }

  return (
    <>
      <h1>{location.country}, {location.name}</h1>
      <h3>{location.region}:</h3>
      <h3>Now - {location.localtime}</h3>
      <p>Tempreture feels: {temp.feelslike_c} C/{temp.feelslike_f} F</p>
      <p>Wind: {temp.wind_mph}</p>
      <p>Wind degree: {temp.wind_degree}</p>
      <p>Direction: {temp.wind_dir}</p>
    </>
  )
}

export default App
