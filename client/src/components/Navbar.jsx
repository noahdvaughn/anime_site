import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import plug from '../assets/plug-solid.svg'
import {AiOutlineSearch, AiFillGithub, AiFillLinkedin} from 'react-icons/Ai'
const Navbar = () => {
  let navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }


  return(
  <div>
  <header>
    <Link className='flex wh Roboto' to='/' >
    <img className='plug'src={plug}/>
    <h1 >SakugaConnector</h1>
    </Link>

    <div className='headerSearch'>
      <input className='headerInput' onChange={handleChange} type="text" onKeyUp={(e)=>{
    if (e.keyCode === 13 && searchValue.length >= 3){
      navigate(`/search/${searchValue}`)
    }}}/> 
    <AiOutlineSearch className='glass' onClick={()=>{
      navigate(`/search/${searchValue}`)

    }}/>
    </div>
    
    <div className='flex'>
      <Link to ='https://github.com/noahdvaughn/sakuga_connector' target='_blank'>
        <AiFillGithub className='headerSocials'/>
      </Link>
      <Link to='https://www.linkedin.com/in/noahvaughn/' target='_blank'>
        <AiFillLinkedin className='headerSocials'/>
      </Link>
    </div>
  </header>
  </div>)
}
export default Navbar