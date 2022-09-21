import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ArrayItems } from '../../mock/Array';
import ItemDetail from './ItemDetail';
import style from './Detail.module.scss'
import {doc, getDoc, collection} from 'firebase/firestore';
import {db} from '../Firebase/FireBaseConfig';


const ItemDetailContainer = () => {

    const {idDetail} = useParams(); // usamos UseParams para leer la URL dinamica asignada en el path del MAIN.
    const [products, setProducts] = useState({}); // le ponemos corchetes por que nos va a llegar un Objeto
    const [isLoading, setLoading] = useState(true); // para el loading, lo inicializamos con un valor booleano

    useEffect (() => {

        const detailCollection = collection(db,"products");

        const ref = doc(detailCollection,idDetail);

        getDoc(ref)
        .then((res) => {

            setProducts({
                
                id:res.id,
                ...res.data(),
            })

        })
        .catch((error) =>{
            console.error(error);
        })
        .finally(()=>{
            setLoading(false);
        })


    },[idDetail]) // el [] es para que no se cree un bucle y se resuelva una sola vez

  return (
    <div className={style.detailContainer}>
        {
         isLoading ? <h2 style={{color:'white'}}>Cargando...</h2>
         : <ItemDetail product={products} key={products.id}/>   
        }
    </div>
  )
}

export default ItemDetailContainer