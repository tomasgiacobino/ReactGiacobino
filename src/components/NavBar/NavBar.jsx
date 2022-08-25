import React from 'react'
import CartWidget from './CartWidget'
import LogoPng from '../../img/logoMain1.png'


const NavBar = () => {
  return (
    <nav>
      <ul>
        {<img src={LogoPng} alt="" />}
        <li>
          NFT World
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
