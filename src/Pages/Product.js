import React from 'react'
import placeholder from '../images/placeholder.png';

const Product = ({product}) => {
    let card = product.map((item, index) => {
        return(
            <div className='App-item' key={index}>
                <img src={placeholder} alt='placeholder'
                    style={{width: '20%'}}/>
                <div className='App-item-description'>
                    <p className='App-item-title'> {item.title}</p>
                    <p className='App-item-popularity'> {item.popularity + '  Users'}</p>
                </div>    
                <p className='App-item-price'>{'₹ ' + item.price}</p>
            </div>
        )
    })

    return (
        <div>
            <div className='App-items'>
                {card}
            </div>   
        </div>
    )
}


export default Product