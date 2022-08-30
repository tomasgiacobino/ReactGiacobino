import React from 'react'
import style from './main.module.scss'
import Hero from './Hero'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const Main = () => {
  return (  

    <main>
        <Hero/>
        <ItemListContainer />
    </main>
  )
}

export default Main