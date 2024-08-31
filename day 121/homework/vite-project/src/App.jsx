import { useState } from 'react'

function App() {
  const text = 'something written there is nothing';
  const part = text.split(' ').slice(0, 2).join(' ');

  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const [mode, setMode] = useState('white');
  const [val, setVal] = useState('');
  const [warning, setWarning] = useState('');
  const [color, setColor] = useState();
  const [intervalId, setIntervalId] = useState(null);
  const [full, setFull] = useState(false);

  function handleChage(e){
    setVal(e.target.value);
    if(e.target.value.length > 20) setWarning('Too long');
    else setWarning('');
  }

  function start_stop() {
    if (!start) {
      const id = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
      setIntervalId(id);
      setStart(true);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
      setStart(false);
    }
  }

  return (
    <>
      <div style = {{backgroundColor: mode, color: mode == 'while' ? 'black' : 'white'}}>
        <button onClick = {() => setMode(mode == 'white' ? 'black' : 'white')}>{mode}</button>
      </div>
      <input onChange = {handleChage} type = 'text' value = {val} placeholder='Only 20 simboles' />
      <label>{warning}</label>
      <form style = {{backgroundColor: color}}>
        <input type = 'radio' name = 'option' onClick = {() => setColor('red')}/><label>Red</label>
        <input type = 'radio' name = 'option' onClick = {() => setColor('blue')} /><label>Blue</label>
        <input type = 'radio' name = 'option' onClick = {() => setColor('green')} /><label>Green</label>
      </form>
      <h1>{count}</h1>
      <button onClick = {start_stop}>start/stop</button><button onClick = {() => setCount(0)}>reset</button>
      <p>{full ? text : part}</p>
      <button onClick = {() => full ? setFull(false) : setFull(true)}>Full text</button>
    </>
  )
}

export default App
