import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <button onClick = {() => setCount(count + 1)}>Increase</button>
        <button onClick = {() => setCount(count - 1)}>Decrease</button>
        <p>{count}</p>
    </div>
  )
}

export default App
