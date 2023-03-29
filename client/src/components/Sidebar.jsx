import {Link} from 'react-router-dom'
import house from '../assets/white-home-icon-png-21.jpg'
import login from '../assets/loginicon.png'
const Sidebar = () => {

  return(
  <div className='Sidebar'>
    <Link to='/'>
    <img src={house} className='icon'/>
    <p>Home</p>

    </Link>
    <Link>
    <img src={login} className='icon'/>
    <p>Sign-In</p>
    </Link>
  </div>
  )
}
export default Sidebar