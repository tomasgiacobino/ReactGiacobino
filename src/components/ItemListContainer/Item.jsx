import React from 'react'
import { Link } from 'react-router-dom'
import style from './Item.module.scss'

const Item = (props) => {


  const { item } = props

  return (
    <section className={style.cards}>
      <div className={style.cardInfo} style=
        {{
          backgroundImage: `url(${item.img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '400px',
          width: '250px',
          margin: '10px',
          padding: '10px',
          boxShadow: '0px 0px 10px 10px #ccc',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          color:'white',
        }}>
        

          <p className={style.title}>{item.title}</p>

      </div>
      <Link to={`/detail/${item.id}`}>
        <button className={style.btnDetails}>Details</button>
      </Link>
    </section>
  )
}

export default Item