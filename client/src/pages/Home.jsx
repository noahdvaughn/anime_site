import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { GetSeasonal } from '../services/anime'

const Home = () => {
  const [seasonalAnime, setSeasonalAnime] = useState([])
  
  
  useEffect(()=>{

    const grabSeasonal = async () => {
      setSeasonalAnime(await GetSeasonal())
    }
    // grabSeasonal()
  }, [])




  return <div>
    <h1>
      Home
    </h1>
  </div>
}
export default Home
