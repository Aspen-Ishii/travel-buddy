import { useState } from 'react';
//styles
import styles from './SingleItem.module.css';

// library imports
import { CheckIcon, TrashIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
//import { TrashIcon } from '@heroicons/react/24/outline'; /*broken error: TrashIcon already being imported */


const SingleItem = ({item, deleteItem, toggleItem, enterEditMode }) => {
    const [isChecked, setIsChecked] = useState(item.checked)
    
    
    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked); {/* toggle off and on */}
        toggleItem(item.id);
    }

    return (
    <li className={styles.item}>
        <div className={styles["item-group"]}>
            <input type="checkbox" className={styles.checkbox} checked={isChecked}  
            onChange={handleCheckboxChange}
            name={item.name} id={item.id}
            />
        
            <label htmlFor={item.id} className={styles.label}>
            
            {item.name}
            <p className={styles.checkmark}>
                <CheckIcon strokeWidth={2} width={24} height={24} />
            </p>
            </label>
        </div>
        <div className={styles["item-group"]}>
            <button className='btn' aria-label={`Update ${item.name} Item`}
            onClick={() => enterEditMode(item)}
            >
                <PencilSquareIcon width={24} height={24} />
            </button>
            <button
            className={`btn ${styles.delete}`}
            aria-label={`Delete ${item.name} Item`}
            onClick={() => deleteItem(item.id)}
            >
                <TrashIcon width={24} height={24} />
            </button>
        </div>
    </li>
  )
}

export default SingleItem