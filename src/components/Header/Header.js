import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
function Header() {
 const navigate = useNavigate()
    return (
        <div className='Header'>
            <div className='topBar'>
                <div className='topBarp'>
                    <p>Welcome to our online shop</p>
                </div>
                <div className='section'>
                    <div className='topSelect'>
                        {/* <select >
                            <option>
                                <span>English (USD)</span>
                            </option>
                            <option>
                                <span>Ru (Rub)</span>
                            </option>
                            <option>
                                <span>Arm (Dram)</span>
                            </option>
                        </select> */}
                    </div>
                    <div className='line'></div>
                    <div>
                        <Link to='/login' onClick={() => navigate('/login')}>Login</Link>
                        <Link to='/registr'>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header