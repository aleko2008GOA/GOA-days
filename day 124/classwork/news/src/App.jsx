import { useState, useEffect } from 'react'

function App() {
  const [arr, setArr] = useState([]);
  useState(() =>{
    async function getDate(data){
      const responce = await fetch(data);
      const api_data = await responce.json();
      
      setArr(api_data.data);
    } 

    getDate('https://api.thenewsapi.com/v1/news/top?api_token=DL7KKpOInhKaXll5zNjCw6e3r0MU01YkKqjkYYKw&locale=us&limit=3');
  }, [arr]);

  const elements = arr.map((val, index) => 
      <section style = {{display: 'flex', justyfyContent: 'space-between', padding: '10vw 0'}} key = {index}>
        <span style = {{flex: 2}}>
          <h1>{val.title}</h1>
          <p>{val.published_at}</p>
          <p>{val.description}</p>
        </span>
        <img style = {{flex: 1}} src = {val.image_url} width = '400'/>
      </section>
  );

  return (
    <>{elements}</>
  )
}

export default App
