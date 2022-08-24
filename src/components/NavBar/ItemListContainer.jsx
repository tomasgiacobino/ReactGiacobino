import React from 'react'
import CartWidget from './CartWidget'
import style from './navBar.module.scss'

const ItemListContainer = () => {
  return (
    <div className={style.info}>
        <div>
        <CartWidget />
        </div>
        <a href="#">About Us</a>
        <a href="#">Contactanos</a>
        <a href="#">NFT? Why would i buy this?</a>
    </div>
  )
}

export default ItemListContainer