import { useState } from 'react';
import Counter from './counter.jsx';
import CreateList from './createList.jsx';
import Carousel from './Carousel.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <CreateList />
      <Carousel />
    </>
  )
}

export default App;
