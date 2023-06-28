import React, { useEffect } from 'react'
import './LogIn.css'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectFormInfo } from '../../store/slices/registr/registrSlice'
import {  selectCurrentUser, toggleUser } from '../../store/slices/login/loginSlice'


function LogIn() {

    const formRef = useRef(null)
    const navigate = useNavigate()
    const formInfo = useSelector(selectFormInfo)
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)

    const handleSubmit = (e) => {
        e.preventDefault();
        const [{ value: userId }, { value: password }] = formRef.current
        dispatch(toggleUser(formInfo))
        if (currentUser.every(user => user.firstName === userId && user.password === password)) {
            navigate('/')
        }
        formRef.current.reset()
    }

    useEffect(() => {
        if (currentUser.length) {
            navigate('/registr')
        }
    }, [])

    return (
        <div className='logIn'>
            <div className='logSection'>
                <div className='logTitle'>
                    <h1>SIGN IN</h1>
                    <button>CREATE AN ACCOUNT</button>
                </div>
                <div className='logInput'>
                    <form ref={formRef} onSubmit={handleSubmit} key={Math.random()}>
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