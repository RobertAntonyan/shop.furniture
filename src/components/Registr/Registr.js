import React, { useEffect, useRef } from 'react'
import './Registr.css'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import {  selectFormInfo, setFormInfo, toggleInput} from '../../store/store'


function Registr({formInfo,setFormInfo, currentUser, setCurrentUser }) {
  const formRef = useRef(null)
  const navigate = useNavigate(null)
  const dispatch = useDispatch()
  
  
    const {firstName, lastName, password} = useSelector(selectFormInfo)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //  const currentUser = formInfo.find(el => el.firstName === firstName && el.lastName === lastName && el.password === password);
    //  const { firstName: { value: firstName }, lastName: { value: lastName }, password: { value: password }, zipCode: { value: zipCode }, city: { value: city }, email: { value: email }, phone: { value: phone } } = formRef.current
    //   setCurrentUser([
    //   ...currentUser,
    //   {
    //     ...formInfo
    //   }
    // ])
    // setFormInfo({
    //   firstName: '',
    //   lastName: '',
    //   password: ''
    // })
   
    // const formInfo = {
    //   firstName: e.target.firstName.value
    // }
    // navigate('/login')
    
      
    const { firstName: { value: firstName }, lastName: { value: lastName }, password: { value: password } } = formRef.current
    formRef.current.reset()
    console.log(firstName, lastName, password);
  }
  
  const handleChange = (e) => {
    // setFormInfo({
    //   ...formInfo,
    //   [name]: value,
    // })

     }
  return (
    <div className='registr'>
      <div className='forms'>
        <div className='formHeader'>
          <h1>REGISTER NOW</h1>
          <button className='logIn'>LOG iN</button>
        </div>
        <div className='formInputs'>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input onChange={handleChange}  name='firstName' className='firstInput' placeholder='First name:*' type='text' />
            <input  name='lastName' className='lastInput' placeholder='Last name:*' type='text' />
            <input  name='password' className='companyInput' placeholder='Password:' type='password' />
            <input name='zipCode' className='zipInput' placeholder='Zip code:*' />
            <input name='city' className='cityInput' placeholder='City:' />
            <input name='email' className='emailInput' placeholder='Email:*' type='text' />
            <input name='phone' className='phoneInput' placeholder='Phone:*' />
            <button className='account'>Create account</button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Registr