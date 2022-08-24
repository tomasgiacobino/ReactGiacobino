import React from 'react'
import ItemListContainer from '../NavBar/ItemListContainer'
import style from './footer.module.scss'
// import Logo2Png from '../../img/logo2.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
        {/* <img src={Logo2Png} alt="" /> */}
        <ItemListContainer />
    </footer>
  )
}

export default Footer