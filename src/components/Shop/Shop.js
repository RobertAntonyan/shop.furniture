import React from 'react'
import './Shop.css'
import Offer from '../Offer/Offer'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'
import Customer from '../Customer/Customer'



function Shop({productData, setProductData}) {

  return (
    <div className='shop'>
        <Offer />
        <Products productData={productData} setProductData={setProductData} />
        <Customer />
      <Footer />
    </div>
  )
}

export default Shop