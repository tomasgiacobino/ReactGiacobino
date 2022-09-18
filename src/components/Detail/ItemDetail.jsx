import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import ItemCount from '../counter/ItemCount'
import style from './Detail.module.scss'


const ItemDetail = (props) => {

  const { product } = props

  const { addItem, getProductQty} = useContext(CartContext);

  const [countValue, setCountValue] = useState(0);

  const onAdd = (countFromItemCount) => {

    setCountValue(countFromItemCount); // me llega la cantidad del contador
    addItem(product, countFromItemCount) // para setear y le pasamos como parametro procuct(que es donde estan todos mis productos), y la cantidad.

    console.log('Se agrego a carrito!');

  }

  const sendQtyToCartContext = getProductQty(product.id);




  return (
    <section className={style.section}>

      <div className={style.cartAndDesc}>


        <div
          style=
          {{
            backgroundImage: `url(${product.img})`,
            opacity:'70%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '400px',
            width: '250px',
            margin: '10px',
            padding: '10px',
            boxShadow: '0px 0px 10px 5px #ccc',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'space-around',
            color: 'white',
          }}>

        </div>

        <h2 style={{ fontSize: "40px", color:"white"}}>{product.title}</h2>

        <div
          style=
          {{
            backgroundColor:'white',
            opacity:'75%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '400px',
            width: '250px',
            margin: '10px',
            padding: '10px',
            boxShadow: '0px 0px 10px 5px #ccc',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'space-around',
            color: 'black',
          }}>
            
          
          <h2>Stock: {product.stock}</h2>
          <h3>{product.description}</h3>
          <h3>${product.price}</h3>


        </div>

      </div>
      {
        countValue === 0 ? <ItemCount stock={product.stock} initial={sendQtyToCartContext} onAdd={onAdd} />
          : <Link to="/cart"> <button className={style.btnViewCart}> View Cart </button> </Link>
      }
    </section>
  )
}

export default ItemDetail