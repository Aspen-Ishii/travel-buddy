import { useState } from 'react';
import styles from './BackpackStyles.module.css';

//imported libraries
import { PlusIcon } from '@heroicons/react/24/solid';

//prevent auto page refresh when form is submitted 
const Backpack = ({addItem}) => {
  const [item, setItem] = useState("");

  const handelFormSubmit = (e) => {
      e.preventDefault();
      addItem({
        name: item,
        checked: false,
        id: Date.now(),
      })
      setItem("") /* clear input form to empty string*/

  }

  return (
    <form className={styles.list} onSubmit={handelFormSubmit}>
        <div className={styles.wrapper}> 
           <input type='text'  id='item' className={styles.input} 
           value={item}
           onInput={(e) => setItem(e.target.value)}
           required 
           autoFocus
           maxLength={60}
           placeholder='Enter item'
           />
           <label htmlFor='item' className={styles.label}>Enter Item</label> 
        </div>
        <button className={styles.btn} aria-label='Add Item' type='submit'>
        <PlusIcon />
        </button>
    </form>
  );
};

export default Backpack