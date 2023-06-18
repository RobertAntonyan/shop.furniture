import React from 'react'
import './Products.css'
import ProductItem from '../ProductItem/ProductItem'
import { useSelector } from 'react-redux'



function Products() {

const productData = useSelector((state) => state.productData)
  return (
    <div className='products'>
        <div   className='productTitle'>
            <h1>OUR PRODUCTS</h1>
            <ul>
                <li>All Products</li>
                <li>Best Sellers</li>
                <li>New Arrivals</li>
                <li>Todays Deals</li>
            </ul>
        </div>
        <div className='ProductItems'>

         {
          
            productData.map(el => (
              <ProductItem 
              key={el.id}
              id={el.id}
              title={el.title}
              description={el.description}
              newPrice={el.newPrice}
              oldPrice={el.oldPrice}
              img={el.img}
              />
            ))

         }


        </div>
      
    
    
    </div>
  )
}

export default Products