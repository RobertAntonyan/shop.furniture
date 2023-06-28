import React from 'react'
import './Shop.css'
import Offer from '../Offer/Offer'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'
import Customer from '../Customer/Customer'



function Shop() {

  return (
    <div className='shop'>
        <Offer />
        <Products  />
        <Customer />
      <Footer />
    </div>
  )
}

export default Shop