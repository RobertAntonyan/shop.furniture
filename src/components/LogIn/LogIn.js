import React, { useEffect } from 'react'
import './LogIn.css'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function LogIn({currentUser, setCurrentUser,  }) {
    const formRef = useRef(null)
    const navigate = useNavigate()
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const [{value: userId }, {value: password }] = formRef.current
       
          if(currentUser.some(user => user.firstName === userId && user.password === password)) {
           navigate('/')
          } 
        formRef.current.reset() 
        }
    
   useEffect(()=> {
        if(!currentUser.length) {
                navigate('/registr')
        }
   },[])

    return (
        <div className='logIn'>
            <div className='logSection'>
                <div className='logTitle'>
                    <h1>SIGN IN</h1>
                    <button>CREATE AN ACCOUNT</button>
                </div>
                <div className='logInput'>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input name='userId' className='logUser' placeholder='User Id' type='text' />
                        <input name='password' className='logPassword' placeholder='Password' type='password' />
                        <button className='logButton'>Login</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default LogIn