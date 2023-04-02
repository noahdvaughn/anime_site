import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import x from '../assets/x.png'


const Register = ( {toggleRegistering}) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      bio: 'user has no bio yet',
      profile_pic: 'https://freesvg.org/img/abstract-user-flat-4.png',
      friend_list: [],
      watched_list: [],
      upvoted: [],
      downvoted: []
    })
    toggleRegistering()
  }

  return<div className="loginDiv">

  <div className="flex xdiv">
    <img src={x} className='icon loginX' onClick={toggleRegistering}/>
  </div>

  <div className='flex'>
  <h3 className='loginTitle'>Register</h3>
    <form onSubmit={handleSubmit}>
          <div>
            <input
              className="rounded-input"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Username"
              value={formValues.name}
              required
            />
          </div>
          <div>
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

          <div>
            <input
              placeholder="Password"
              className="rounded-input"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              placeholder="Confirm Password"
              className="rounded-input"
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            className="registerButton"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Register User
          </button>
        </form>
        </div>
  </div>
}
export default Register