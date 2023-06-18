import React from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'
import { Location, Phone, Clock } from '../../SVGS/SVG'

function Contact() {

  return (
    <div className='contact'>
      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24390.27240757107!2d44.456403249999994!3d40.16936155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1685205331435!5m2!1sru!2sam" width={1164} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>

      <div className='worktime'>
        <div className='workBlock1'>
          <Location />
          <h3>Where are we?</h3>
          <p>200 12th Ave, New York,</p>
          <p>NY 10001, USA</p>
        </div>
        <div className='workBlock2'>
          <Phone />
          <h3>Call us</h3>
          <p>T +1 222 333 4444</p>
          <p>F +1 222 333 5555</p>
        </div>
        <div className='workBlock3'>
          <Clock />
          <h3>Working hours</h3>
          <p>Mon - Sat: 10am - 6pm</p>
          <p>Sun 12pm - 2pm</p>
        </div>
      </div>
        <div className='sendEmail'>
          <h1>SEND AN EMAIL</h1>
          <div>
          <p>Thanks for your interest in Mobel Theme. We belive in creativity as one of the major forces of progress. Please use this form if you have any questions about our products and we'll get back with you very soon.</p>
          </div>
          <button>Contact us via form</button>

        </div>

      <Footer />
    </div>
  )
}

export default Contact