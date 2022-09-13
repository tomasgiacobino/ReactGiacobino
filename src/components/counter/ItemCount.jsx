import React, {useState} from 'react'

import estilos from './itemCount.module.scss'

const ItemCount = (props) => {

    const {stock, initial, onAdd} = props; // Traigo las props que le asigne al ItemCount desde HERO.

    const [count, setCount] = useState(initial); // Hook de Estado, hace que se me actualicen mis componentes -> count. Devuelve un array de dos posicion.

    const sumar = () =>{

        if (count < stock) {

            setCount(count + initial); // setear el valor de count cuando realizo la suma. Actualizo el estado de count.
            
        } else {
            console.log("No hay mas stock") 
        }

    }

    const restar = () =>{

        if(count > initial){

            setCount(count - initial) // Hago lo mismo que en la funcion Sumar.

        }else{
            console.log("!")
        }

    }

    const mandarAPadre = () => {
        
        onAdd(count)
    }

    

    
  return (
    <div className={estilos.count}>
        <p>Count: {count}</p>


        <button onClick={sumar}> + </button> {/* con onClick, al hacer click en el boton +, llamo a la funcion sumar */}


        <button onClick={restar}> - </button> {/* con onClick, al hacer click en el boton -, llamo a la funcion restar */}

        <button onClick={mandarAPadre}> {/* con onClick, llamo a la funcion onAdd declarada en el Hero*/}
            Add
        </button>

    </div>
  )
}

export default ItemCount