import React from 'react'
import './ProductItem.css'
import { useNavigate } from 'react-router-dom'



function ProductItem({ id, title, description, newPrice, oldPrice, img }) {
    const navigate = useNavigate()
    
    return (
        <div className='productItem'>
            <div className='itemImg'>
                <img src={img} className='image' alt='img' />
            </div>
            <div className='itemText'>
                <p className='title'>{title}</p>
                <h2>{description}</h2>
                <p className='newPrice'>$ {newPrice}</p>
                <p className='oldPrice'>$ {oldPrice}</p>

            </div>
            <button onClick={() => navigate(id)}>Buy Now</button>
        </div>
    )
}

export default ProductItem