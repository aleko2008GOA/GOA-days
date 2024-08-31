import { useState, useEffect } from 'react'

function App() {
  const [arr, setArr] = useState([]);
  useEffect(() =>{
    getData('https://fakestoreapi.com/products');
  }, []);

  async function getData(data){
    const responce = await fetch(data);
    const api_data = await responce.json();
    
    setArr(api_data);
  } 

  return (
    <div style = {{display: 'grid', gridTemplateColumns: '400px 400px 400px', gap: '20px', alignItems: 'space-between', justifyContent: 'space-between'}}>
      {arr.map((val, i) =>(
        <section style = {{border: '2px solid', padding: '20px'}} key = {i}>
          <h2>{val.title}</h2>
          <p>{val.description}</p>
          <img src = {val.image} style = {{width: '50%'}}/>
          <span style = {{display: 'flex', justifyContent: 'space-between'}}>
            <button>Bye: {val.rating.count}</button>
            <p>{val.rating.rate}</p>
          </span>
        </section>
      ))}
    </div>
  )
}

export default App
