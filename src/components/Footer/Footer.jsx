import React from 'react'
import NavBarContainer from '../NavBar/NavBarContainer'
import style from './footer.module.scss'
import LogoSmall from '../../img/logoSmall2.png'

const Footer = () => {


  return (
    <footer className={style.footer}>
        { <img src={LogoSmall} alt="" />}
        <NavBarContainer />
    </footer>
  )
}

export default Footer