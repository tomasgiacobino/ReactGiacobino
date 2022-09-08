import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
//import ItemCount from '../counter/ItemCount'
import style from './main.module.scss'

const Hero = ({ funcionPaH }) => {

    // const onAdd = () =>{

    //     alert("Se agrego a carrito.")
    // }

    const funcionCallBack = (param) => { // a la funcion la llamamos con un CallBack ya que recibe un parametro
        console.log(param)
    }

    const funcionSinCallBack = () => { // a la funcion no la llamamos con callBack ya que no recibe ningun parametro
        console.log('No usamos call back')
    }

    return (
        <div className={style.padreHero}>

            <div className={style.hero}>
                <div className={style.div1}>
                    <h2 onClick={funcionSinCallBack}>
                        This is new Art.
                    </h2>
                    <h3 onClick={() => funcionCallBack('Estoy probando el call back')}>
                        NFT
                    </h3>
                </div>
                <div className={style.div2}>
                    <h2 onClick={() => funcionPaH('Probando funcion de Padre a Hijo')}>
                        Evolved art.
                    </h2>
                    {/* { <ItemCount stock={10} initial={1} onAdd={onAdd}/> } */}
                </div>
            </div>
                <ItemListContainer />
        </div>
    )
}
export default Hero