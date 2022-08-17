import React from 'react'
import style from './main.module.css'
const comovosquieras = {parrafo1:{
  color: 'red',
  fontSize: '20px',
  border: '2px solid black',
  textAlign:'center',
  padding:'10px',
  margin:'auto'
},parrafo2:{
  color:'white',
  fontSize:'50px',
  border:'4px outset green',
  borderRadius: '5px',
  textAlign:'center',
}}

const Main = () => {
  return (

    <main className={style.main}>
        <p style={{color:'blue', fontSize:'30px', textAlign:'center'}}>La *palabra prohibida* de tu madre All Boys</p>
        <p style={comovosquieras.parrafo1}>Los colores son momentaneos, no tengo tan mal gusto:)</p>
        <p style={comovosquieras.parrafo2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui reprehenderit deserunt nemo maiores similique a unde nulla neque!</p>
    </main>
  )
}

export default Main