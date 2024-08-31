import { useState } from 'react'

function App(){
  function start_count(){
    let timeleft = 3;
    document.getElementById('click_counting').innerHTML = timeleft;
    for(let i = 1; i <= 3; i++){
      setTimeout(() =>{
        timeleft = 3 - i;
        document.getElementById('click_counting').innerHTML = timeleft;
      }, i * 1000);
    }

    start_count_clicks();
  }

  function start_count_clicks(){
    let clicks = 0;
    let active = true;

    setTimeout(() =>{
      document.getElementById('click_counting').addEventListener("click", () =>{
        if(active){
          clicks += 1;
          document.getElementById('click_counting').innerHTML = "clicks: " + clicks;
        }
      });
      
      setTimeout(() => {
        active = false;
        document.getElementById('total_speed').innerHTML = `${clicks/5} clicks per second`
      }, 5000);
    }, 4000);
  }

  return (
    <div>
      <h1>Hello world!</h1>
      <h2>Counting clicks</h2>
      <button onClick={start_count}>Count your clicks</button>
      <div id = "click_counting" style={{
          width: '200px',
          height: '100px',
          backgroundColor: 'grey',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px',
        }}>

      </div>
      <p id = "total_speed">Your speed</p>
    </div>
  )
}

export default App