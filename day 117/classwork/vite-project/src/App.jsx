import React from 'react'
import { useState } from 'react'
import PersonInfo from './personInfo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonInfo name = "Alex" lastname = "Melikajanian" email = "alexmelikjanian@gmail.com"/>
    </>
  )
}

export default App;
