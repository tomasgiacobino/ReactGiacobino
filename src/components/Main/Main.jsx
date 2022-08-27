import React from 'react'
import style from './main.module.scss'
import Hero from './Hero'
import Item from '../ItemListContainer/Item'


const Main = () => {
  return (  

    <main>
        <Hero test="HOLAAA" fecha={25}/>
        <Item />
    </main>
  )
}

export default Main