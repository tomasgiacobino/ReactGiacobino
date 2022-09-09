import React from 'react'
import Item from './Item'
import style from './Item.module.scss'

const ItemList = (props) => {

  const {estado} = props;

  return (
    <div>
            <div className={style.padreCards}>
            {
              
              estado.map((produ) => {
                
                return(
                  <Item item={produ} key={produ.id}/>
                  )
                  
                })
                
              }
            </div>   
    </div>
  )
}

export default ItemList