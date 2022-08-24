import React from 'react'
import style from './main.module.scss'
import Hero from './Hero'
import Productos from './Productos'
const comovosquieras = {parrafo1:{
  fontSize: '20px',
  border: '2px solid black',
  textAlign:'center',
  padding:'10px',
  margin:'auto'
},parrafo2:{
  fontSize:'50px',
  border:'4px outset green',
  borderRadius: '5px',
  textAlign:'center',
}}

const Main = () => {
  return (  

    <main>
        <Hero/>
        <Productos />
    </main>
  )
}

export default Main