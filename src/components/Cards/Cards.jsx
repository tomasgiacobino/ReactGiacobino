import React from 'react'
import './Cards.scss'

const Cards = () => {
    return (
        <section className='sectionCards'>
            <div className='card'>
                <div className='cardInfo'>

                    <h3>Premium</h3>
                    <h4>$3000 - $5000</h4>
                    <h4>Only 4 NFTS</h4>

                </div>
            </div>


            <div className='card'>

                <div className='cardInfo'>

                    <h3>Gold</h3>
                    <h4>$1600 - $2999</h4>
                    <h4>Only 4 NFTS</h4>
                </div>

            </div>


            <div className='card'>

                <div className='cardInfo'>


                    <h3>Silver</h3>
                    <h4>$1000 - $1599</h4>
                    <h4>Only 4 NFTS</h4>

                </div>

            </div>


            <div className='card'>

                <div className='cardInfo'>


                    <h3>Bronce</h3>
                    <h4>$500 - $999</h4>
                    <h4>Only 4 NFTS</h4>

                </div>

            </div>




        </section>
    )
}

export default Cards