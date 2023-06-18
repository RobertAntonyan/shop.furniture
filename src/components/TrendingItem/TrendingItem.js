import React from 'react'
import './TrendingItem.css'
function TrendingItem({title, description, newPrice, oldPrice, img}) {
   
  return (
    <div className='item'>
        <div className='itemSale'>
            <span>Sale</span>
        </div>
        <div className='itemImg'>
            <img src={img} alt='pic' width={262} height={282}/>
        </div>
        <div className='itemText'>
            <h4>{title}</h4>
            <h5>{description}</h5>
            <div className='itemPrice'>
                <span className='newPrice'>${newPrice}</span>
                <span className='oldPrice' >${oldPrice}</span>
            </div>
        </div>  
    </div>
  )
}

export default TrendingItem