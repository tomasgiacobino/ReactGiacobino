import React from 'react'
import style from '../Main/main.module.scss'

const ItemDetail = (props) => {

    const {product} = props

  return (
    <div className={style.itemDCont}>
        <h2>{product.title}</h2>
        <h3>{product.price}</h3>
        <h4>{product.description}</h4>
    </div>
  )
}

export default ItemDetail