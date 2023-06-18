import React, { useEffect } from 'react'
import './Logo.css'
import { Basket, Notification, User } from '../../SVGS/SVG'
import { useNavigate } from 'react-router-dom'


function Logo(cart,setCart, setCurrentUser, currentUser) {

const navigate = useNavigate()
    return (
        <div className='Logo'>
            <div className='logoIcon'>
                <svg  onClick={() => navigate('/')}  className="icon icon-tabler icon-tabler-armchair-2" fill="none" height={24} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none" /><path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" /><path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" /><path d="M8 12h8" /><path d="M7 19v2" /><path d="M17 19v2" /></svg>
                <p onClick={() => navigate('/')}>Furniture</p>
            </div>
            <div className='logoSearch'>
                <input type='search' className='search' /> 
               <div className='searchIcon'>
                    <svg className='loop' enableBackground="new 0 0 50 50" height="25px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="25px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect fill="none" height={50} width={50} /><circle cx={21} cy={20} fill="none" r={16} stroke="#000000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={2} /><line fill="none" stroke="#000000" strokeMiterlimit={10} strokeWidth={4} x1="32.229" x2="45.5" y1="32.229" y2="45.5" /></svg>
                </div>
            </div>
            <div className='icons'>
            <button onClick={() => navigate('/cart')}> <Basket /></button>
                <Notification />
                <User  />
            </div>

        </div>
    )
}

export default Logo