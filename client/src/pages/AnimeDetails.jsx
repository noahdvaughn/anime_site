import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { GetDetails } from "../services/anime"
import { GetAllByAnimeId } from "../services/recommended"

const AnimeDetails = () => {
  const {animeId, animeName} = useParams()
  const [details, setDetails] = useState()
  const [data, setData] = useState()

  useEffect(()=>{
    const grabDetails = async(animeId) => {
      setDetails(await GetDetails(animeId))
    }
    const grabDataByAnime = async(animeId) => {
      setData(await GetAllByAnimeId(animeId))
    }
    grabDataByAnime(animeId)
    grabDetails(animeId)
  },[])

  console.log(details)


  return <div>
    {details ? (
      <h1>{details.data.synopsis}</h1>
    ) : (<></>)}
    <button></button>
  </div>
}
export default AnimeDetails