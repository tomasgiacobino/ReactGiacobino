import React from 'react'
import style from './navBar.module.scss'
import {Link} from 'react-router-dom'

const NavListContainer = () => {
  return (
    <div className={style.info}>
        <Link to="/category/premium">Premium</Link>
        <Link to="/category/gold">Gold</Link>
        <Link to="/category/silver">Silver</Link>
        <Link to="/category/bronce">Bronce</Link>
        <Link to="/all">All Products</Link>
    </div>
  )
}

export default NavListContainer