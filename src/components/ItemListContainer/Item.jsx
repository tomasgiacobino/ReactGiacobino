import React from 'react'
import { Link } from 'react-router-dom'
import style from './Item.module.scss'

const Item = (props) => {


  const { item } = props

  const backImage = {
    backgroundImage: item.img,
  }


  return (
    <section className={style.cards}>
      <div style=
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
        }}
        className={style.cardInfo}>


          <p>{item.description}</p>
          <p className={style.title}>{item.category}</p>
          <p>{item.price}</p>
        {/* <img className={style.img} src={item.img} alt="" /> */}
      </div>
      <Link to={`/detail/${item.id}`}>
        <button>Detalles</button>
      </Link>
    </section>
  )
}

export default Item