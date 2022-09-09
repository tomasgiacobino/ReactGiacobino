import React from 'react'
import Hero from './Hero'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import {Route,Routes} from 'react-router-dom'
import ItemDetailContainer from '../ItemListContainer/ItemDetailContainer'



const Main = () => {
  
  const funcionDePadreAHijo = (param) =>{ // la funcion va del padre Main al hijo Hero y la llamamos con un callBack ya que recibe un parametro.
    console.log(param)
}
  
  return (  
    <main>
      <Routes>
        <Route 
            path="/"
            element={<Hero funcionPaH={funcionDePadreAHijo}/>}
        />
        <Route path="/category/:categoryName" element={<ItemListContainer/>} />
        <Route path="/detail/:idDetail" element={<ItemDetailContainer/>}/>
      </Routes>
    
    </main>
  )
}

export default Main