import React from 'react'
import CartWidget from '../NavBar/CartWidget'
import NavBarContainer from '../NavBar/NavBarContainer'
import NavBar from '../NavBar/NavBar'
import estilos from './header.module.scss'
import Button from '../Button/Button'


const Header = () => {
  return (
      <header className={estilos.header}>
          <NavBar/>
          <div className={estilos.cartYitemList}>
          <CartWidget />
          <NavBarContainer />    
          <Button value="Sing in" variant="primary"/>
          </div>
      </header>
  )
}

export default Header