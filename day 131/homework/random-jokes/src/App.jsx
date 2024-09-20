import RandomJokes from './pages/jokes'
import { Home } from './pages/home'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/joke' element = {<RandomJokes/>} />
      </Routes>
    </>
  )
}

export default App
