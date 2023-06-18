import React from 'react'
import './Customer.css'
import Images from '../../Images/index'
import { NavigateLeft, NavigateRight } from '../../SVGS/SVG'

function Customer() {


    return (
        <div className='customer'>

            <h2>WHAT OUR CUSTOMER SAYS</h2>

            <img src={Images.customer} alt='nkar' />
            <div className='Box'>
                <div className='left'>
                    <NavigateLeft className='navigateLeft'/>
                </div>
                <div className='textBox'>
                    <p>I like Furniking.com and as compared to other company it's polices and
                        customers support is very good easy to reach., also many time they unable
                        to delivered. The ultricies are pregnant while the quis is suspended. Risus
                        commodo viverra maecenas accumsan lacus vel facilisist amet.</p>
                </div>
                <div className='right'>
                    <NavigateRight  />
                </div>
            </div>
            <h4>Julianna Smith</h4>
            <p>Co- founder</p>

        </div>
    )
}

export default Customer