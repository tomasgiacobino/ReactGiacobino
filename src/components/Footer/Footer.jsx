import React from 'react'
import NavBarContainer from '../NavBar/NavBarContainer'
import style from './footer.module.scss'
// import Logo2Png from '../../img/logo2.png'

const Footer = (props) => {

  const {fecha, alumno, empresa} = props

  return (
    <footer className={style.footer}>
        {/* <img src={Logo2Png} alt="" /> */}
        <NavBarContainer />
        <h4>{fecha} {alumno.nombre} {alumno.curso} {alumno.apellido} {empresa}</h4>
    </footer>
  )
}

export default Footer