import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { GetSeasonal } from '../services/anime'
import AnimeCard from '../components/AnimeCard'

const Home = () => {
  const [seasonalAnime, setSeasonalAnime] = useState([])
  
  
  useEffect(()=>{

    const grabSeasonal = async () => {
      setSeasonalAnime(await GetSeasonal())
    }
    grabSeasonal()
  }, [])
console.log(seasonalAnime.data)
// console.log(seasonalAnime.data.data[1])



  return <div>
    <h1>
      Home
    </h1>
    {seasonalAnime.length === 0 ? (<>bad</>) : 
    (<div>
      {seasonalAnime.data.map((anime)=>(
      <AnimeCard anime={anime.node}/>
    ))}</div>) }
    
  </div>
}
export default Home
