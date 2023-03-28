import { useState, useEffect, useContext } from 'react'
import {useParams} from "react-router-dom"
import { GetSearchedAnime } from '../services/anime'


const SearchDetails = () => {
  const {search} = useParams()
  const [searchedAnime, setSearchedAnime] = useState()


  useEffect(()=>{
    const grabSearchedAnime = async(search) => {
      setSearchedAnime(await GetSearchedAnime(search))
    }
    grabSearchedAnime(search)
    console.log(searchedAnime)
    }, [])

  return <div></div>
}
export default SearchDetails