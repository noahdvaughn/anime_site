import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { GetSeasonal } from '../services/anime'
import AnimeCard from '../components/AnimeCard'

const Home = ({user}) => {
  const [seasonalAnime, setSeasonalAnime] = useState([])
  
  
  useEffect(()=>{

    const grabSeasonal = async () => {
      setSeasonalAnime(await GetSeasonal())
    }
    grabSeasonal()
  }, [])



  return <div>
    <h1>
      Home
    </h1>
    {seasonalAnime.length === 0 ? (<>Loading...</>) : 
    (<div>
      {seasonalAnime.data.map((anime)=>(
      <AnimeCard anime={anime.node} key={anime.node.id}/>
    ))}</div>) }
    
  </div>
}
export default Home
