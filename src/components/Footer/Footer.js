import React from 'react'
import './Footer.css'
import { Facebook, Instagram, Pinterest, Twitter } from '../../SVGS/SVG'

function Footer() {

  return (
    <div className='footer'>
      <div id='section'>
        <div className='footerBlock1'>
          <div className='logoIcon'>
            <svg className="icon icon-tabler icon-tabler-armchair-2" fill="none" height={24} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none" /><path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" /><path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" /><path d="M8 12h8" /><path d="M7 19v2" /><path d="M17 19v2" /></svg>
            <h2>Furniture</h2>
            {/* <br /> */}
            <p id='funk'>Funking is the a popular
              Ecommerce site. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod
               tempor</p>
            <div className='footerIcon'>
              <Facebook />
              <Twitter />
              <Instagram />
              <Pinterest />
            </div>
          </div>
        </div>
        <div className='footerBlock2'>
          <h2>Help</h2>
          <p>Privacy Policy</p>
          <p>Shiping & Delivery</p>
          <p>Refund Policy</p>
          <p>Track Your Order</p>
        </div>
        <div className='footerBlock3'>
          <h2>Store</h2>
          <p>Furniture</p>
          <p>Tabble</p>
          <p>Sofa</p>
          <p>Other</p>
        </div>
        <div className='footerBlock4'>
          <h2>Supports</h2>
          <p>Feedback</p>
          <p>Contact us</p>
          <p>Download app</p>
          <p>Terms conditins</p>
        </div>
      </div>
      <div className='Terms'>
        <div className='s'>
          <p>© 2021 Funking - All rights reserved.</p>
        </div>


        <div className='t'>
          <p>Privacy</p>
          <p>Security</p>
          <p>Terms</p>
        </div>

      </div>

    </div>
  )
}

export default Footer