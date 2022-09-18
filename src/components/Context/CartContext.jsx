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

    // funcion para saber cuantas unidades tengo en mi carrito.
    const getProductQty = (id) => { // le pasamos el id porque es lo que queremos comprar

      const product = cart.find ((prod) => prod.id === id); // recorremos mi carrito y va a preguntar si ese producto ya esta en el carrito

      return product?.qty; // retornamos la cantidad del producto que esta en el carrito (pq es lo unico que nos interesa)
    }

    // funcion para calcular el total del precio de todo el carrito.
    const totalPrice = () => { 

      let acumulador = 0 // creamos un acumulador 

      cart.forEach((prod) => { //iteramos el carrito.

        acumulador += prod.price * prod.qty; // multiplicamos el precio por la cantidad.

      })

      return acumulador; // por cada vuelta retorno mi acumulador. 
    }
    
    // funcion para calcular el total de unidades para el cartWidget
    const totalQty = () => {

      let acumulador = 0; 

      cart.forEach((prod) => { // iteramos el carrito

        acumulador += prod.qty; // sumamos las unidades

      })

      return acumulador; // por cada vuelta retorno mi acumulador.
    }


    console.log(cart);
  return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart, getProductQty, totalPrice, totalQty}}>
            {children}
        </CartContext.Provider>
  )
}

export default CartProvider