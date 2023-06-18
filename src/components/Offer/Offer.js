import React from 'react'
import './Offer.css'
import Images from '../../Images'
function Offer() {
    return (
        <div className='offer'>
            <div className='bigBlock'>
                    <img  className='bigImg' src={Images.modern} alt='m'/> 
            <div className='content_1'>
                <h3>Modern Furniture Collections</h3>
                <h4>Starting from $500</h4>
                <h5>Read more</h5>
            </div>
            </div>
            <div className='smallBlocks'>
                <div className='smallBlock'>
                    <img   className='smallImg' src={Images.slide1} alt='sl'/>
                    <div className='content_2'>
                <h3>Geometric Bookcase</h3>
                <h4>Up to 20% discount</h4>
                <h5>Read more</h5>
            </div>
                </div>
                <div className='smallBlock'>
                    <img   className='smallImg' src={Images.slide2} alt='sl'/>
                    <div className='content_3'>
                <h3>Minimal Sofa Collections</h3>
                <h4>Sale up to 40% discount</h4>
                <h5>Read more</h5>
            </div>
                </div>
            </div>




        </div>
    )
}

export default Offer