import React from 'react'
import style from './button.module.scss'


const Button = (props) => {

    const {value, variant} = props;
  return (
    <button className={style[variant]}>{value}</button>
  )
}

export default Button