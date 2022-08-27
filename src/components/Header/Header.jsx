import React from 'react'
import CartWidget from '../NavBar/CartWidget'
import NavBarContainer from '../NavBar/NavBarContainer'
import NavBar from '../NavBar/NavBar'
import estilos from './header.module.scss'


const Header = () => {
  return (
      <header className={estilos.header}>
          <NavBar/>
          <div className={estilos.cartYitemList}>
          <CartWidget />
          <NavBarContainer />    
          </div>
      </header>
  )
}

export default Header