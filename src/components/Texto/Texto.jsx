import React from 'react'
import { useState } from 'react'

const Texto = () => {

    const [nombre,setNombre] = useState('Eric')


    const cambiarNombre = () =>{
      if (nombre === 'Eric'){
        setNombre('Tomas')
      }else{
        setNombre('Eric')
      }
    }




    const [valor, setValor] = useState(true) // usamos el useState para darle un estado a valor = true.

    const cambiarValor = () =>{
        setValor(!valor) // con el !, hacemos que todo el tiempo cambie el valor de true a false y viceversa 
    }
  return ( // con el operador ternario ?, logramos que salga si es true o false (el valor es true, el valor es false).

    <div>
        {valor ? <h1 onClick={cambiarValor}>
            El valor es true
        </h1>
        :
        <h1 onClick={cambiarValor}>El valor es false</h1>} 

        <h1>Mi nombre es: {nombre}</h1>

        <button onClick={cambiarValor}> Cambiar Valor</button>
        <button onClick={cambiarNombre}>Cambiar Nombre</button>

    </div>
  )
}

export default Texto