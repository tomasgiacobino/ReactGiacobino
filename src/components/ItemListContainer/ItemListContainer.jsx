import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ArrayItems } from '../../mock/Array'
import ItemList from './ItemList';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../Firebase/FireBaseConfig';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]); // le ponemos corchetes por que nos va a llegar un Array
    const {categoryName} = useParams();


    useEffect (() => {

        const itemCollection = collection(db,"products");

        const q = query(itemCollection,where("category", "==", `${categoryName}`));

        const filter = categoryName ? q : itemCollection;

        getDocs(filter)

        .then((resp) =>{
  
            const products = resp.docs.map((prod) => {

                return {
                    ...prod.data(),
                    id: prod.id
                };
                
            });

            setProducts(products);

        })
      
        
    },[categoryName]) // el [] es para que no se cree un bucle y se resuelva una sola vez


  return (
    <div>
        <ItemList estado={products} />
    </div>    
  )
}

export default ItemListContainer