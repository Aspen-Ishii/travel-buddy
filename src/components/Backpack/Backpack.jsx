import { useState } from 'react';
import styles from './BackpackStyles.module.css';

//imported libraries
import { PlusCircleIcon } from '@heroicons/react/24/solid';

//prevent auto page refresh when form is submitted 
const Backpack = () => {
    const handelFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

  return (
    <form className={styles.list} onSubmit={handelFormSubmit}>
        <div className={styles.wrapper}> 
           <input type='text'  id='item' className={styles.input} 
           // value={task}
           //onInput={(e) => setTask(e.target.value)}
           required 
           autoFocus
           maxLength={60}
           placeholder='Enter item'
           />
           <label htmlFor='item' className={styles.label}>Enter Item</label> {/* label moves above input box */}
        </div>
        <button className={styles.btn} aria-label='Add Item' type='submit'>
            submit
        <PlusCircleIcon />
        </button>
    </form>
  );
};

export default Backpack