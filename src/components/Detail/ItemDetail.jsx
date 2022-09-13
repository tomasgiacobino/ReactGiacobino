import React from 'react'
import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import ItemCount from '../counter/ItemCount'
import style from './Detail.module.scss'


const ItemDetail = (props) => {

  const { product } = props

  const {addItem} = useContext(CartContext);

  const [countValue, setCountValue] = useState(0);

  const onAdd = (countFromItemCount) =>{

    setCountValue(countFromItemCount); // me llega la cantidad del contador
    addItem(product, countFromItemCount) // para setear y le pasamos como parametro procuct(que es donde estan todos mis productos), y la cantidad.

    console.log('Se agrego a carrito!');

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

        
        <h2 style={{fontSize:"40px"}}>{product.title}</h2>
        <h3>${product.price}</h3>
        <h3>{product.description}</h3>
        <h2>stock: {product.stock}</h2>

      </div>
      {
        countValue === 0 ? <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/> 
        :  <Link to="/cart"> <button> View Cart </button> </Link>
      }
    </section>
  )
}

export default ItemDetail