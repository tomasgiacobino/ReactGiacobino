import React, {useState, useEffect} from 'react'

import estilos from './itemCount.module.scss'

const ItemCount = (props) => {

    const {stock, initial = 1, onAdd} = props; // Traigo las props que le asigne al ItemCount desde HERO.

    const [count, setCount] = useState(initial); // Hook de Estado, hace que se me actualicen mis componentes -> count. Devuelve un array de dos posicion.


    useEffect(() =>{ // utilizamos un useEffect

        setCount(initial) // setea el contador con el num inicial.

    },[initial]) // escucha si cambia el valor initial.

    

    const sumar = () =>{

        if (count < stock) {

            setCount(count + 1); // setear el valor de count cuando realizo la suma. Actualizo el estado de count.
            
        } else {
            console.log("No hay mas stock") 
        }

    }

    const restar = () =>{

        if(count > 1){

            setCount(count - 1) // Hago lo mismo que en la funcion Sumar.

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