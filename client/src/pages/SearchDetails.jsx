import { useState, useEffect, useContext } from 'react'
import {useParams} from "react-router-dom"
import { GetSearchedAnime } from '../services/anime'
import AnimeCard from '../components/AnimeCard'



const SearchDetails = () => {
  const {search} = useParams()
  const [searchedAnime, setSearchedAnime] = useState(null)
  const [searchValue, setSearchedValue] = useState(search)

  if (searchValue !== search){
    setSearchedValue(search)
  }


  useEffect(()=>{
    const grabSearchedAnime = async(search) => {
      setSearchedAnime(await GetSearchedAnime(search))
    }
    grabSearchedAnime(searchValue)
    console.log(searchedAnime)
    }, [searchValue])
    console.log(searchedAnime)

  return <div>
    {searchedAnime === null ? (<h1 style={{textAlign: 'center',  margin: '0'}}>Loading...</h1>) : 
    (<div>
      {searchedAnime.data.data.map((anime)=>(
      <AnimeCard anime={anime.node} key={anime.node.id}/>
    ))}</div>) }
  </div>
}
export default SearchDetails