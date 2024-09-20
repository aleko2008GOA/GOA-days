import Nav from "./pages/Nav"
import Home from "./pages/Home"
import Info from "./pages/Info"
import Form from "./pages/Form"
import Git from "./pages/Git"
import Photos from "./pages/photos"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/info" element = {<Info />} />
        <Route path = "/form" element = {<Form />} />
        <Route path = "/git" element = {<Git />} />
        <Route path = "/photos" element = {<Photos />} />
      </Routes>
    </>
  )
}

export default App
