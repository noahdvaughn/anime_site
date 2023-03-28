import {Link} from 'react-router-dom'
import plug from '../assets/plug-solid.svg'
const Navbar = ({user, handleLogOut}) => {

  return(
  <div>
  <header>
    <img id='plug'src={plug}/>
    <h1>navtest</h1>
  </header>
  </div>)
}
export default Navbar