import { useState } from 'react'
import CreateObjs from './obj';

function App() {
  const [list, setList] = useState([])

  function handleSubmit(e){
    e.preventDefault();
    let val = e.target.elem.value;
    if(val != '') setList([...list, val]);
    e.target.closest('form').reset();
  }

  function handleRemove(i){
    setList(list.filter((val, index) => i != index));
  }

  return (
    <>
      <form onSubmit = {handleSubmit}>
        <label>Your task:</label>
        <input type = 'text' name = 'elem'/><br />
        <input type = 'submit' />
      </form>
      <ul>
          {list.map((val, i) =>{
              return (
                <li key = {i}>
                  <span>{val}</span>
                  <button onClick = {() => handleRemove(i)}>Remove</button>
                </li>
              )
            }
          )}
      </ul>
      < CreateObjs />
    </>
  )
}

export default App
