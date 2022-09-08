import React from 'react'
import Item from './Item'
import style from '../Main/main.module.scss'

const ItemList = (props) => {

  const {estado} = props;

  return (
    <div className={style.padreProd}>
            <h2> Ours featured NFTS </h2>
            <div className={style.productos2}>
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