import { useState } from 'react';
//styles
import styles from './SingleItem.module.css';

// library imports
import { CheckIcon } from '@heroicons/react/24/outline';


const SingleItem = ({item}) => {
    const [isChecked, setIsChecked] = useState(item.checked)
    
    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked); {/* toggle off and on */}
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
    </li>
  )
}

export default SingleItem