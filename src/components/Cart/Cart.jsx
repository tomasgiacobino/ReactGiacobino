import React from 'react'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CarritoProducto from './CarritoProducto'
import style from './Cart.module.scss'


const Cart = () => {

  const { cart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) { // Sirve para que si no hay productos en el Carrito me retorne esta informacion, si es true solo retorna esto, si es false retorna el return de abajo, pero solo 1 .

    return (
      <div>
        <div>
          <h2>Empty Cart</h2>
          <button>

            <Link to="/" >

              Start Shopping.

            </Link>
          </button>



        </div>
      </div>
    )
  }

  return (

    <section className={style.cartPadre}>

      <h2>
        Your Cart
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

      <button className={style.btnClearCart} onClick={clearCart}>Clear Cart</button>
      <h2> Total: ${totalPrice()} </h2>
      <button>Finalizar Compra</button>


    </section>
  )
}

export default Cart