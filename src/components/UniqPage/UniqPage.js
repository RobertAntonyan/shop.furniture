import React from 'react'
import './UniqPage.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'





function UniqPage() {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productData)
    const currentProduct = product.find(el => el.id === params.id)
    const addToCart = () => {
        //  if (cart.some(product => product.id === params.id)) {
        //         setCart([
        //             ...cart.map(item => {
        //                 if (item.id === params.id) {
        //                     return {
        //                         ...item,
        //                         count: item.count + 1,
        //                         newPrice: item.newPrice + item.newPrice / item.count
        //                     }
        //                 }
        //             })
        //         ])

        //      } else {
        //         setCart([
        //             ...cart,
        //             {
        //                 ...productData.find(el => el.id === params.id),
        //                 count: 1,

        //             }
        //         ])
        //     }
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: params.id
            }
        })
    }




    return (
        <div className='uniqPage'>
            <div className='uniq_block1'>
                <img className='uniq_img' src={currentProduct.img} alt='img' />
            </div>
            <div className='uniq_block2'>
                <h2>{currentProduct.description}</h2>
                <p className='uniq_Title'>{currentProduct.title}</p>
                <p className='uniq_newPrice'>New price ${currentProduct.newPrice}</p>
                <p className='uniq_oldPrice'>Old price  ${currentProduct.oldPrice}</p>
                <button className='uniq_btn' onClick={addToCart}>Buy Now</button>
                <button onClick={() => navigate('/cart')}>zam</button>
            </div>
        </div>
    )
}

export default UniqPage