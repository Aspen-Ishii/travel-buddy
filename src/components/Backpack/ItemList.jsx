//component import
import SingleItem from './SingleItem'

//styles
import styles from './ItemList.module.css'

const ItemList =({items, deleteItem, toggleItem, enterEditMode}) => {
  return (
    <ul className={styles.items}>
        {items.sort ((a,b) => b.id - a.id) .map (item => (
            <SingleItem
                key={item.id}
                item={item}
                deleteItem={deleteItem}
                toggleItem={toggleItem}
                enterEditMode={enterEditMode}
            />
        ))
        }
    </ul>
  )
}

export default ItemList