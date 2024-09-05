import { useState } from 'react';
import './App.css';

//custom components
import Backpack from './components/Backpack/Backpack';
import ItemList from './components/Backpack/ItemList';
import Footer from './components/Footer/Footer';

function App() {
  const [items, setItems] = useState([]); {/*set to empty array */}

  const addItem = (item) => {
    setItems(prevState => [... prevState, item])
  }

  const deleteItem = (id) => {
    setItems(prevState => prevState.filter(t => t.id !== id));
  }
  
  const toggleItem = (id) => {
    setItems(prevState => prevState.map (t => (
      t.id == id ? { ...t, checked: !t.checked } //set it opposite to current checked status
      : t //else return item
    
    ))) 
  }

  return (
    <div className='container'>
      <header>
        <h1>Travel Buddy</h1>
      </header>
      <Backpack addItem={addItem}/>
      {items && (
        <ItemList 
          items={items}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
        />
      )}
      
      
      <Footer />
    </div>
  )
}

export default App
