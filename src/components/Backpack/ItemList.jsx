//component import
import SingleItem from './SingleItem'

//styles
import styles from './SingleItem.module.css'

const ItemList =({items}) => {
  return (
    <ul className={styles.items}>
        {items.map(item => (
            <SingleItem
                key={item.id}
                item={item}
            />
        ))
        }
    </ul>
  )
}

export default ItemList