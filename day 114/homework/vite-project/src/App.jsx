import { useState } from 'react'
import Contact from './contact.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Contact />
    </>
  )
}

export default App
