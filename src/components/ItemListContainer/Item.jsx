import React from 'react'
import { Link } from 'react-router-dom'
import style from './Item.module.scss'

const Item = (props) => {


  const { item } = props
  return (
      <section className={style.cards}>
        <div className={style.card}>
          <div className={style.cardInfo}>
            <p>{item.description}</p>
            <p className={style.title}>{item.category}</p>
            <p>{item.price}</p>
            {<img className={style.img} src={item.img} alt="" />}
          </div>
          <Link to={`/detail/${item.id}`}>
            <button>Detalles</button>
          </Link>
        </div>
      </section>
  )
}

export default Item