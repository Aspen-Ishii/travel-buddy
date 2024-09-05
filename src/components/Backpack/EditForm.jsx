import { useState } from 'react';
import styles from './BackpackStyles.module.css';

//imported libraries
import { CheckIcon } from '@heroicons/react/24/solid';

//prevent auto page refresh when form is submitted 
const EditForm = ({ editedItem, updateItem }) => {
  const [updatedItemName, setUpdatedItemName] = useState(editedItem.name);

  const handelFormSubmit = (e) => {
      e.preventDefault();
      // updateItem()
      }
 }
  

  return (
    <div 
        role='dialog'
        aria-labelledby='editItem' 
        //onClick={}
    >
        <form className={styles.list} onSubmit={handelFormSubmit}>
            <div className={styles.wrapper}>
               <input 
               type='text'  
               id='editItem' 
               className={styles.input}
               value={updatedItemName}
               onInput={(e) => setUpdatedItemName(e.target.value)}
               required
               autoFocus
               maxLength={60}
               placeholder='Update item'
               />
               <label htmlFor='editItem' className={styles.label}>Update Item</label>
            </div>
            <button className={styles.btn} 
            aria-label={`Confirm edited item to now read ${updatedItemName}`}
            type='submit'>
            <CheckIcon strokeWidth={2} height={24} width={24} />
            </button>
        </form>   
    </div>
    );
};

export default EditForm
