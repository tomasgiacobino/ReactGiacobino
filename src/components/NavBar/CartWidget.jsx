import React from 'react'
import './navBar.module.scss'
import {FaOpencart} from 'react-icons/fa'
import estilos from '../Header/header.module.scss'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {

  const {totalQty} = useContext(CartContext)

  return (
    <div>
      <span className={estilos.cart}>
        <FaOpencart/>
      </span>
      <span>
        {totalQty() === 0 ? "" : totalQty()}
      </span>
    </div>
  )
}

export default CartWidget