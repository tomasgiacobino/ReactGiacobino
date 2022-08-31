import React from 'react'
import style from './main.module.scss'
import Hero from './Hero'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemListContainer/ItemDetailContainer'
import {Route,Routes} from 'react-router-dom'


const Main = () => {
  return (  

    <main>
        <Hero/>
        <ItemListContainer/>
        <ItemDetailContainer/>
    </main>
  )
}

export default Main