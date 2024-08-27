import { useState } from 'react';


//imported components
import Backpack from './components/Backpack';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Travel Buddy</h1>
      <Backpack />
      
     
    </div>
  )
}

export default App
