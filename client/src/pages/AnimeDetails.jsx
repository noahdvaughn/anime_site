import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { GetDetails } from "../services/anime"

const AnimeDetails = () => {
  const {animeId, animeName} = useParams()
  const [details, setDetails] = useState()

  useEffect(()=>{
    const grabDetails = async(animeId) => {
      setDetails(await GetDetails(animeId))
    }
    grabDetails(animeId)
  },[])



  return <div>
    {details ? (
      <h1>{details.data.background}</h1>
    ) : (<></>)}
  </div>
}
export default AnimeDetails