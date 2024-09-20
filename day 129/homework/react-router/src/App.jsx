import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Form from './pages/Form.jsx'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "about" element = {<About />} />
        <Route path = "form" element = {<Form />} />
      </Routes>
    </>
  )
}

export default App
