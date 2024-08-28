import { useState } from 'react';
import './App.css';

//custom components
import Backpack from './components/Backpack/Backpack';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <header>
        <h1>Travel Buddy</h1>
      </header>
      <Backpack />
      <Footer />
    </div>
  )
}

export default App
