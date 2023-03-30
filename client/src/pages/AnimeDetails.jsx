import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { GetDetails } from "../services/anime"
import { GetAllByAnimeId } from "../services/recommended"
import CreateReview from "./CreateReview"


const AnimeDetails = ({user}) => {
  const {animeId, animeName} = useParams()
  const [details, setDetails] = useState()
  const [data, setData] = useState()
  const [modal, setModal] = useState(false)

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

  const toggleModal = () => {
    setModal(!modal)
  }



  return <div className="animeDetailsBody">
    {details ? (

      <p>{details.data.synopsis}</p>

    ) : 
    (<></>)}
    {user ? (
    <button>Make A Review</button>

    ): (<p>Log in to make a review</p>)}
    {modal && (
    <div className="modal">

      <div className="overlay">
        <CreateReview id={animeId} name={animeName} year={details.data.start_date} genre={details.data.genres} toggleModal={toggleModal}/>
      </div>
    </div>
    )}

    <button onClick={toggleModal}>test rev</button>
    
    
  </div>
}
export default AnimeDetails