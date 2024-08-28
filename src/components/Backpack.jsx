import { useState } from 'react';
import styles from './BackpackStyles.module.css';

//prevent auto page refresh when form is submitted 
const Backpack = () => {
    const handelFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);

    }

  return (
    <form className="list" onSubmit={handelFormSubmit}>
        <div className="wrapper"> 
           <input type='text'  id='item' className='input' 
           // value={task}
           //onInput={(e) => setTask(e.target.value)}
           required 
           autoFocus
           maxLength={60}
           placeholder='Enter item'
           />
           <label htmlFor='item' className='label'>Enter Item</label> {/* label moves above input box */}
        </div>
        <button className='btn' aria-label='Add Item' type='submit'>
            Submit
        </button>
    </form>
  );
};

export default Backpack