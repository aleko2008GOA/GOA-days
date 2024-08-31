import { useState } from 'react'

function App() {
  const [count, setCount] = useState(false)

  return (
    <>
      <button onClick={() => setCount(!count)}>Do not click me!!!</button>
      {count == true ? <p>I said :(</p> : <p>Click to see!</p>}
    </>
  )
}

export default App
