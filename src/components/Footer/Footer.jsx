import React from 'react'
import NavBarContainer from '../NavBar/NavBarContainer'
import style from './footer.module.scss'
import LogoSmall from '../../img/logoSmall2.png'
import Button from '../Button/Button'

const Footer = () => {


  return (
    <footer className={style.footer}>
        { <img src={LogoSmall} alt="" />}
        <NavBarContainer />
        <Button value='Log Out' variant='secondary'/>
    </footer>
  )
}

export default Footer