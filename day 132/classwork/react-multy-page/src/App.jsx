import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Form } from './pages/Form'
import News from './pages/News'

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/sign' element = {<Form/>} />
        <Route path = '/news' element = {<News/>} />
      </Routes>
    </>
  )
}

export default App
