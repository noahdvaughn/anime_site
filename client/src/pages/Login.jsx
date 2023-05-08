import { useState } from 'react'
import { SignInUser } from '../services/auth'
import { useNavigate, Link } from 'react-router-dom'

import x from '../assets/x.png'
import { AiOutlineCloseCircle } from 'react-icons/Ai'




const Login = ( {toggleModal, setUser}) => {
  let navigate = useNavigate()

  
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setUser(payload)
    toggleModal()
  }
  const guestLogin = (e) => {
    e.preventDefault()
    setFormValues({ email: 'guest@guest', password: 'guest' })
  }

  return <div className="loginDiv">

    <div className='flex xdiv'>
    <h3 className='loginTitle'>Login</h3>
    <AiOutlineCloseCircle onClick={toggleModal} className='x'/>

    </div>


    <div className='flex'>
     <form className="loginForm" onSubmit={handleSubmit}>
            <div className="flex">
              <label className="noDec" htmlFor="email"></label>
              <input
                className="rounded-input"
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email"
                value={formValues.email}
                required
              />
            </div>
            <div className="flex">
              <label className="noDec" htmlFor="password"></label>
              <input
                className="rounded-input"
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                required
              />
            </div>
            <div className='flex'>
            <button
              className="signInButton"
              disabled={!formValues.email || !formValues.password}
            >
              Sign In
            </button>
            <button className="signInButton" onClick={guestLogin}>
              Guest Login
            </button>
              
            </div>
            </form>
    </div>
  </div>
}
export default Login