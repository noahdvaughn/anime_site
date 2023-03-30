import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'


const Login = ( ) => {
  
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    navigate('/')
  }
  const guestLogin = (e) => {
    e.preventDefault()
    setFormValues({ email: 'guest@guest', password: 'guest' })
    handleSubmit(e)
  }

  return <div className="reviewDiv">
     <form className="" onSubmit={handleSubmit}>
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
            <button
              className="signInButton"
              disabled={!formValues.email || !formValues.password}
            >
              Sign In
            </button>
            <button className="signInButton" onClick={guestLogin}>
              Guest Login
            </button>
            <Link to='/register'>
            <h1>New User? Sign Up Here</h1>
            
            </Link>
            </form>
  </div>
}
export default Login