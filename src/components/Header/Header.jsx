import React from 'react'
import ItemListContainer from '../NavBar/ItemListContainer'
import NavBar from '../NavBar/NavBar'
import estilos from './header.module.scss'


const Header = () => {
  return (
      <header className={estilos.header}>
          <NavBar/>
          <ItemListContainer />
      </header>
  )
}

export default Header