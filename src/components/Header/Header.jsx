import React from 'react'
import CartWidget from '../NavBar/CartWidget'
import NavBarContainer from '../NavBar/NavBarContainer'
import NavBar from '../NavBar/NavBar'
import estilos from './header.module.scss'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
      <header className={estilos.header}>
          <NavBar/>
          <div className={estilos.cartYitemList}>
            <Link to="/cart">
            <CartWidget />
            </Link>
          <NavBarContainer />    
          <Button value="Sign in" variant="primary"/>
          </div>
      </header>
  )
}

export default Header