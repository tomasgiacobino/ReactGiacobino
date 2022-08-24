import React from 'react'
import './navBar.module.scss'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const CartWidget = () => {
  return (
    <div>
      <span>
        <AiOutlineShoppingCart/>
      </span>
    </div>
  )
}

export default CartWidget