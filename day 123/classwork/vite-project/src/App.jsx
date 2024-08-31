import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');
  const [newCount, setNewCount] = useState(0);

  useEffect(() => console.info('Count changed'), [count]);
  useEffect(() => console.log('Color changed'), [color]);

  useEffect(() =>{
    document.addEventListener('click', increment);
    return () => document.removeEventListener('click', increment);
  });

  function increment(){
    setNewCount(prev => prev + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick = {() => setCount(prev => prev + 1)}>Plus</button>

      <form>
        <input type = 'radio' name = 'color' onClick = {() => setColor('red')} /><label>Red</label>
        <input type = 'radio' name = 'color' onClick = {() => setColor('blue')} /><label>Blue</label>
        <input type = 'radio' name = 'color' onClick = {() => setColor('green')} /><label>Green</label>
      </form>
      <p style = {{color: color}}>Hello world!</p>

      <button>Click me!</button>
      <p>{newCount}</p>
    </>
  )
}

export default App
