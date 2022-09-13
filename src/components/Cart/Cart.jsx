import React from 'react'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import CarritoProducto from './CarritoProducto'
import style from './Cart.module.scss'


const Cart = () => {

  const { cart, clearCart } = useContext(CartContext);

  return (

    <section className={style.cartPadre}>

      <h2>
        Carrito!
      </h2>

      

        <div className={style.carts}>
          {
            cart.map((produ) => {

              return (
                <CarritoProducto product={produ} key={produ.id} />
              )
            })
          }

        </div>

      <button onClick={clearCart}>Vaciar Carrito</button>

    </section>
  )
}

export default Cart