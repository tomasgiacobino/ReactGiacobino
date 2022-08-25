import React from 'react'
import CartWidget from '../NavBar/CartWidget'
import ItemListContainer from '../NavBar/ItemListContainer'
import NavBar from '../NavBar/NavBar'
import estilos from './header.module.scss'


const Header = () => {
  return (
      <header className={estilos.header}>
          <NavBar/>
          <div className={estilos.cartYitemList}>
          <CartWidget />
          <ItemListContainer />    
          </div>
      </header>
  )
}

export default Header