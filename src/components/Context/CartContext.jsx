import React from 'react'
import { useState, createContext } from 'react'

export const CartContext = createContext(); // creamos el contexto

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]); // Array vacio porque todavia no agregue nada.

    const addItem  = (item, qty) =>{ // creamos una funcion para setear mi carrito.

      if (isInCart(item.id)) {

        addQty(item,qty);

        
      } else {

        setCart([...cart,{...item,qty}]); // de esta manera adjuntamos qty dentro del objeto item, le pasamos ...cart para que no se pisen los valores y me agregue + de 1 producto.
      }

    }

    const removeItem = (id) => {

      const cartFiltrado = cart.filter((prod) => prod.id !== id)

      setCart(cartFiltrado);
    }

    const clearCart = () => { 

      setCart([])

    }

    const isInCart = (id) => {

      return cart.some((prod) => prod.id === id) 

    }

    const addQty = (item,qty) => {
      
      const updateCart = cart.map((produ) =>{

        if (produ.id === item.id){
          
          const updateProduct = {

            ...produ,
            qty:qty
          }

          return updateProduct;

        } else {

          return produ;

        }

      })

      setCart(updateCart)

    }


    console.log(cart);
  return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart}}>
            {children}
        </CartContext.Provider>
  )
}

export default CartProvider