import { useState } from 'react';

//custom components
import Backpack from './components/Backpack';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <header>
        <h1>Travel Buddy</h1>
      </header>
      <Backpack />
      
    </div>
  )
}

export default App
