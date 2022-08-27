import React from 'react'
import CartWidget from './CartWidget'
import LogoPng from '../../img/logoMain1.png'


const NavBar = () => {
  return (
    <nav>
      <ul>
        {<img src={LogoPng} alt="" />}
        <p>
          NFT World
        </p>
      </ul>
    </nav>
  )
}

export default NavBar
