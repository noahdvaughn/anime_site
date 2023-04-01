import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { GetSeasonal } from '../services/anime'
import AnimeCard from '../components/AnimeCard'

const Home = ({user}) => {
  const [seasonalAnime, setSeasonalAnime] = useState([])
  let randNum = Math.floor(Math.random() * 9)
  
  
  useEffect(()=>{

    const grabSeasonal = async () => {
      setSeasonalAnime(await GetSeasonal())
    }
    grabSeasonal()
  }, [])
console.log(seasonalAnime)


  return <div className='homeDiv'>
    <h1>
      Top Upcoming Anime
    </h1>

    {seasonalAnime.length === 0 ? (<>Loading...</>) : 
    (<div>

      <div className="homeCenterAnime">
        <div className='homeCenterAnimeText'> 
          <h2>{seasonalAnime.data[randNum].node.title}</h2> 
          <p className='homeCenterBody'>{seasonalAnime.data[randNum].node.synopsis}</p>
        </div>
        
      <img className='homeImage' src={seasonalAnime.data[randNum].node.main_picture.large}/>
      </div>

      <div className='homeRow'>
        {seasonalAnime.data.map((anime)=>(
            <AnimeCard anime={anime.node} key={anime.node.id}/>
          ))}</div>
      </div> 
      )}
    </div>
  
}
export default Home
