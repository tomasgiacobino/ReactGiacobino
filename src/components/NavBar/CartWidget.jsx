import React from 'react'
import './navBar.module.scss'
import {FaOpencart} from 'react-icons/fa'
import estilos from '../Header/header.module.scss'

const CartWidget = () => {
  return (
    <div>
      <span className={estilos.cart}>
        <FaOpencart/>
      </span>
    </div>
  )
}

export default CartWidget