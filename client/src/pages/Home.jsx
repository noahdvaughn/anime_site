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
    <h2 className='Roboto'>
    </h2>

    {seasonalAnime.length === 0 ? (<>Loading...</>) : 
    (<div>

      <div className="homeCenterAnime">
        <div className='homeCenterAnimeText'> 
          <h1 className='Roboto pinkUL'>{seasonalAnime.data[randNum].node.title}</h1> 
          <p className='homeCenterBody black Roboto'>{seasonalAnime.data[randNum].node.synopsis}</p>
        </div>
        <Link to={`/details/${encodeURIComponent(seasonalAnime.data[randNum].node.title)}/${seasonalAnime.data[randNum].node.id}`}>
        <img className='homeImage' src={seasonalAnime.data[randNum].node.main_picture.large}/>
        </Link>
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
