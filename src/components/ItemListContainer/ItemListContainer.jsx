import React, {useState, useEffect} from 'react'
import { ArrayItems } from '../../mock/Array'
import ItemList from './ItemList';
import style from '../Main/main.module.scss'


const ItemListContainer = () => {

    const [item, setItem] = useState([]); // le ponemos corchetes por que nos va a llegar un Array


    useEffect (() => {

        const getProducts = new Promise ((res,rej) => { //si pongo res caera en el then, si pongo rej caera en el catch

            setTimeout(() => {

                res(ArrayItems) // esta respuesta va a caer en el then, por lo tanto mostrara mi ArrayItems

            }, 2000)

        })
        getProducts
        .then((response) => { // en los parentesis cae la resolucion de la promesa

            setItem(response) // guardamos en mi estado item el response que me llega, setItem actualiza mi estado cuando me llega el response 
        })
        .catch((err) => {

            console.log(err); // salio todo mal
        })
        .finally(() => {

            console.log('Llego al final'); // el finally se ejecuta siempre
        })

    },[]) // el [] es para que no se cree un bucle y se resuelva una sola vez


  return (
    <div>
        <ItemList estado={item} />
    </div>    
  )
}

export default ItemListContainer