import { useState } from 'react';
import './App.css';

//custom components
import Backpack from './components/Backpack/Backpack';
import EditForm from './components/Backpack/EditForm';
import ItemList from './components/Backpack/ItemList';
import Footer from './components/Footer/Footer';

function App() {
  const [items, setItems] = useState([]); {/*set to empty array */}
  const [editedItem, setEditItem] = useState(null); 
  const [isEditing, setIsEditing] = useState(false);
  

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

  const updateItem = (item) => {
    setItems(prevState => prevState.map (t => (
      t.id == item.id ? { ...t, name: item.name } 
      : t 
    ))) 
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    //TODO: previous state focus
  }

  const enterEditMode = (item) => {
    setEditItem(item);
    setIsEditing(true);
    //TODO: set focus back to original
  }

  return (
    <div className='container'>
      <header>
        <h1>Travel Buddy</h1>
      </header>
      <Backpack addItem={addItem}/>
      
      { isEditing && (
        <EditForm 
         editedItem={editedItem} 
         updateItem={updateItem}
         />
      )}

      { items && (
        <ItemList 
          items={items}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
          enterEditMode={enterEditMode}
        />
      )}
      
      <Footer />
    </div>
  )
}

export default App
