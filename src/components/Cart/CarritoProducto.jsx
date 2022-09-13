import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext'
import style from './Cart.module.scss'

const CarritoProducto = (props) => {

    const {product} = props 

    const {removeItem} = useContext(CartContext);

  return (
    <div className={style.cartInfo}
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
        <h1>{product.category}</h1>
        <h2>{product.title}</h2>
        <h2>{product.price}</h2>
        <h3>{product.qty}</h3>
        <button onClick={() => removeItem(product.id)}> Eliminar </button>
    </div>
  )
}

export default CarritoProducto