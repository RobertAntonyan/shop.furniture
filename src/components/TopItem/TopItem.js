import React, { memo } from 'react'
import './TopItem.css'
function TopItem({ img, description, price }) {
    return (
        <div className='topItem'>
            <img src={img} alt={description} className='topImg' />
            <p className='price'><span>$</span> {price} </p>
            <p>{description}</p>
        </div>
    )
}

export default memo(TopItem)