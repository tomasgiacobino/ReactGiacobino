import React, {useState, useEffect} from 'react'
import { ArrayItems } from '../../mock/Array';
import ItemDetail from './ItemDetail';
import style from '../Main/main.module.scss'


const ItemDetailContainer = () => {

    const [products, setProducts] = useState({}); // le ponemos corchetes por que nos va a llegar un Array
    const [isLoading, setLoading] = useState(true); // para el loading, lo inicializamos con un valor booleano

    useEffect (() => {

        const getProducts = new Promise ((res,rej) => { //si pongo res caera en el then, si pongo rej caera en el catch

            const productoUnico = ArrayItems.find(prod => prod.id === 2);

            setTimeout(() => {

                res(productoUnico) // esta respuesta va a caer en el then, por lo tanto mostrara mi productoUnico

            }, 2000)

        })
        getProducts
        .then((response) => { // en los parentesis cae la resolucion de la promesa

            setProducts(response) // guardamos en mi estado products el response que me llega, setProducts actualiza mi estado cuando me llega el response 
        })
        .catch((err) => {

            console.log(err); // salio todo mal
        })
        .finally(() => {

            setLoading(false) 
            console.log('Llego al final'); // el finally se ejecuta siempre
        })

    },[]) // el [] es para que no se cree un bucle y se resuelva una sola vez

  return (
    <div className={style.detailContainer}>
        {
         isLoading ? <h2>Cargando...</h2>
         : <ItemDetail product={products} key={products.id}/>   
        }
    </div>
  )
}

export default ItemDetailContainer