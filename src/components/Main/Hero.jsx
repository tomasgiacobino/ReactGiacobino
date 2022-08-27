import React from 'react'
import ItemCount from '../counter/ItemCount'
import style from './main.module.scss'

const Hero = (propiedades) => {

    const onAdd = () =>{

        alert("Se agrego a carrito.")
    }


  return (
    <div className={style.hero}>
        <div className={style.div1}>
            <h2>
                This is new Art.
            </h2>
            <h3>
                NFT
            </h3>
            <h3>{propiedades.test} {propiedades.fecha}</h3>
        </div>
        <div className={style.div2}>
            <h2>
            This is how art evolved. 
            </h2>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    </div>
  )}
export default Hero