import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ArrayItems } from '../../mock/Array'
import ItemList from './ItemList';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]); // le ponemos corchetes por que nos va a llegar un Array
    const {categoryName} = useParams();


    useEffect (() => {
        if (categoryName) {

            const getProducts = new Promise ((res,rej) => { //si pongo res caera en el then, si pongo rej caera en el catch
                const productosXCategoria = ArrayItems.filter(prod => prod.category === categoryName);
                setTimeout(() => {
                        res(productosXCategoria) // esta respuesta va a caer en el then, por lo tanto mostrara mi ArrayItems              
                }, 500)
            });

                getProducts
                .then((response) => { // en los parentesis cae la resolucion de la promesa
                    
                    setProducts(response) // guardamos en mi estado products el response que me llega, setItem actualiza mi estado cuando me llega el response 
                })
                .catch((err) => {
                    
                    console.log(err); // salio todo mal
                })
                .finally(() => {
                    
                    console.log('Llego al final'); // el finally se ejecuta siempre
                })
            
        } else {

            const getProducts = new Promise ((res,rej) => { //si pongo res caera en el then, si pongo rej caera en el catch


                const productosUnicos = ArrayItems.filter(prod => prod.id <= 4);
    
                setTimeout(() => {
                    
                        res(productosUnicos) // esta respuesta va a caer en el then, por lo tanto mostrara mi ArrayItems              
    
                }, 500)
    
            })
    
    
    
                getProducts
                .then((response) => { // en los parentesis cae la resolucion de la promesa
                    
                    setProducts(response) // guardamos en mi estado products el response que me llega, setItem actualiza mi estado cuando me llega el response 
                })
                .catch((err) => {
                    
                    console.log(err); // salio todo mal
                })
                .finally(() => {
                    
                    console.log('Llego al final'); // el finally se ejecuta siempre
                })
            
        }
        
    },[categoryName]) // el [] es para que no se cree un bucle y se resuelva una sola vez


  return (
    <div>
        <ItemList estado={products} />
    </div>    
  )
}

export default ItemListContainer