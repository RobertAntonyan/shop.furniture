import React, { useEffect, useState } from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem';
import { useSelector } from 'react-redux';


function Cart() {
    const [show, setShow] = useState(false)
    const cart = useSelector(state => state.cart)
    useEffect(()=>{
        if(cart.length === 0){
            setShow(true)
        }else{
            setShow(false)
        }
    },[show])

    return (
        <div className='cart'>
                     <div className='cartEmpty'>

                     <h1 style={{color: show ? '#7AC751' : 'white'}}>Cart is empty</h1>
                     </div>
    
             <div className='popUp'>
                {
                    cart.map(item => (
                        <CartItem  
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                        newPrice={item.newPrice}
                        cart={cart}
                        // setCart={setCart}
                        count={item.count}
                        />
                        ))
                    }
              
                    <div className='cartAllPrice'>
                    <h2>ALL PRICE {cart.reduce((acc, el) => (acc +el.newPrice),0)}</h2> 
                    </div>
             </div>
                             

        </div>
    )
}

export default Cart