import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../counter/ItemCount'
import style from './Detail.module.scss'


const ItemDetail = (props) => {

  const { product } = props

  const [countValue, setCountValue] = useState(0);

  const onAdd = (countFromItemCount) =>{

    setCountValue(countFromItemCount);

    alert("Se agrego a carrito.")

  }

  



  return (
    <section className={style.section}>

      <div className={style.itemDInside}
        style=
        {{
          backgroundImage: `url(${product.img})`,
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
          textAlign: 'center',
          justifyContent: 'space-around',
          color: 'white',
        }}>
        <h2>{product.category}</h2>
        <h3>El precio es:{product.price}</h3>
        <h4>{product.description}</h4>
      </div>
      {
        countValue === 0 ? <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/> 
        :  <Link to="/cart"> <button> View Cart </button> </Link>
      }
    </section>
  )
}

export default ItemDetail