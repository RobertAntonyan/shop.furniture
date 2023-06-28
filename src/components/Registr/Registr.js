import React, { useEffect, useRef } from 'react'
import './Registr.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectFormInfo, setFormInfo, set_Form_Info } from '../../store/slices/registr/registrSlice'

function Registr() {
  const formRef = useRef(null)
  const navigate = useNavigate(null)
  const dispatch = useDispatch()


  //  const [{firstname: {value: userId}}, password: {value: pass}] = currentUser



  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName: { value: firstName },
      lastName: { value: lastName },
      password: { value: password },
      // zipCode: { value: zipCode }, 
      // city: { value: city },
      // email: { value: email },
      // phone: { value: phone }
    } = formRef.current



    // const currentUser = currentUser.find(el => el.firstName === firstName && el.lastName === lastName && el.password === password);
    // setCurrentUser([
    //   ...currentUser,
    //   {
    //       ...formInfo
    //     }
    //   ])

    // setFormInfo({
    //   firstName: '',
    //   lastName: '',
    //   password: ''
    // })


    navigate('/login')
    const formInfo = {
      firstName: firstName,
      lastName: lastName,
      password: password
    }
    dispatch(set_Form_Info(formInfo))

    formRef.current.reset()
  }


  const handleChange = (e) => {

    // setFormInfo({
    //   ...formInfo,
    //   [name]: value,
    // })

    const { name, value } = e.target

    // dispatch({
    //   type: 'toggleInput',
    //   payload: {
    //     [name]: value
    //   }
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
            <input onChange={handleChange} value={selectFormInfo.firstName} name='firstName' className='firstInput' placeholder='First name:*' type='text' />
            <input onChange={handleChange} value={selectFormInfo.lastName} name='lastName' className='lastInput' placeholder='Last name:*' type='text' />
            <input onChange={handleChange} value={selectFormInfo.password} name='password' className='companyInput' placeholder='Password:' type='password' />
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