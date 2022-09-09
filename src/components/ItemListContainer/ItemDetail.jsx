import React from 'react'
import style from './Item.module.scss'

const ItemDetail = (props) => {

    const {product} = props

  return (
      <div className={style.itemDInside}>
        <h2>{product.category}</h2>
        <h3>El precio es:{product.price}</h3>
        <h4>{product.description}</h4>
      </div>
  )
}

export default ItemDetail