import React from 'react'
import LogoPng from '../../img/logoMain1.png'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">{<img src={LogoPng} alt="" />}</Link>    
      </ul>
    </nav>
  )
}

export default NavBar
