import React from 'react'
import style from './navBar.module.scss'

const NavListContainer = () => {
  return (
    <div className={style.info}>
        <a href="#">About Us</a>
        <a href="#">Contactanos</a>
        <a href="#">NFT? Why would i buy this?</a>
    </div>
  )
}

export default NavListContainer