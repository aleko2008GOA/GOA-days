import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [visible, setVisible] = useState('block');
  const [auto, setAuto] = useState(0)

  useEffect(() =>{
    document.title = title;
  }, [title]);

  useEffect(() =>{
    setTimeout(() =>{
      setAuto(prev => prev + 1);
    }, 1000);
  }, [auto]);

  useEffect(() =>{
    console.log(count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(prev => prev + 1)}>{count}</button><br />
      <label>{title}</label><br />
      <input type = 'text' value = {title} onChange = {(e) => setTitle(e.target.value)} /><br />
      <button onClick = {() => setVisible(visible == 'block' ? 'none' : 'block')}>Click me!</button>
      <p style = {{display: visible}}>I am visible!</p>
      <p>{auto}</p>
    </>
  )
}

export default App
