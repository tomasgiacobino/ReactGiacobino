import React from 'react'
import style from '../Main/main.module.scss'

const Item = (props) => {


  const {item} = props
  return (

    
    <section>



        <div className={style.card}>
          <div className={style.cardInfo}>
            <p className={style.title}>{item.title}</p>
          </div>
        </div>
        {/* { <button class="cta">
          <span class="hover-underline-animation"> Shop now </span>
          <svg id="arrow-horizontal" xmlns="httzp://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
          <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
          </svg>
        </button>} */}


    </section>
  )
}

export default Item