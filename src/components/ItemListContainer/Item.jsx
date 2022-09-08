import React from 'react'
import style from '../Main/main.module.scss'

const Item = (props) => {


  const {item} = props
  return (

    
    <section>
        <div className={style.card}>
          <div className={style.cardInfo}>
            <p>{item.description}</p>
            <p className={style.title}>{item.category}</p>
            <p>{item.price}</p>
          </div>
        </div>
        <button>Ver Mas</button>
    </section>
  )
}

export default Item