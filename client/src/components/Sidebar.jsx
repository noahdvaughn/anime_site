import {Link} from 'react-router-dom'
import house from '../assets/white-home-icon-png-21.jpg'
import login from '../assets/loginicon.png'
import logout from '../assets/logouticon.png'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { useEffect, useState } from "react"
import userPic from '../assets/user.png'
import pencil from '../assets/pencil.png'
import folder from '../assets/folder.png'


const Sidebar = ({setUser, user, handleLogOut}) => {
  const [modal, setModal] = useState(false)
  const [registering, setRegistering] = useState(false)
  const [signedIn, setSignedIn] = useState(false)
  const [signedOut, setSignedOut] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  const toggleRegistering = () => {
    setRegistering(!registering)
  }


  return(
  <div className='Sidebar'>
    <Link  className='sidebarLink' to='/'>
    <img src={house} className='icon'/>
    <p>Home</p>
    </Link>
    <Link className='sidebarLink' to='/recommendations'>
    <img src={pencil} className='icon'/>
    <p>Recs</p>
    </Link>

    

    {user ? (
      <>
    <Link className='sidebarLink' to={`/user/${user.id}`}>
    <img src={userPic} className='icon'/>
    <p>Profile</p>
    </Link>
    <div onClick={handleLogOut} className='sidebarLink'>
    <img src={logout} className='icon'/>
    <p>Sign-Out</p>
    </div>
      </>
    ) : (
      <>
    <div className='sidebarLink' onClick={toggleRegistering}>
    <img src={folder} className='icon'/>
    <p>Register</p>
    </div>
    <div onClick={toggleModal} className='sidebarLink'>
    <img src={login} className='icon'/>
    <p>Sign-In</p>
    </div>
    {modal && (
    <div className="modal">
      <div className="overlay">
        <Login toggleModal={toggleModal} setUser={setUser}/>
      </div>
    </div>
    )}
    {registering && (
    <div className="modal">
      <div className="overlay">
        <Register toggleRegistering={toggleRegistering} setUser={setUser}/>
      </div>
    </div>
    )}
      </>
    ) }

  </div>
  )
}
export default Sidebar