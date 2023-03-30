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
  console.log(data)
  


  return <div c>
    {details ? (
      <div className="animeDetailsBody">

      <div className="animeDetailsTop">

        <img src={details.data.main_picture.large}/>
        
        <div className="detailsColumn">
          <h1>{details.data.title}</h1>
          <h2>{details.data.alternative_titles.ja}</h2>
          <div>
            {details.data.genres.map((genre)=>(
              <p>{genre.name}</p>
            ))}
          </div>
          <div style={{display: 'flex'}}>
            <p>Studios: </p>
            {details.data.studios.map((studio)=>(
              <p>{studio.name}</p>
            ))}
          </div>
          <h3>{details.data.num_episodes} Episodes, {details.data.status.replaceAll('_', ' ')}</h3>
          <h3>{details.data.start_date}</h3>
        </div>

        
      </div>
      <>
        <p>{details.data.synopsis}</p>
      </>
      </div>
    ) : 
    (<></>)}

    {user ? (
    <button onClick={toggleModal}>Make A Review</button>
    ): (<p>Log in to make a review</p>)}
    {modal && (
    <div className="modal">
      <div className="overlay">
        <CreateReview id={animeId} name={animeName} year={details.data.start_date.slice(0,4)} genre={details.data.genres} user={user} toggleModal={toggleModal}/>
      </div>
    </div>
    )}

    {data.data.reviews.length === 0 ? (<></>) : (
      <div>
        <h3>Reviews: </h3>
        <div>
          {data.data.reviews.map((review)=>(
            <div></div>
          ))}
        </div>
        </div>
      )}
    </div>
  
}
export default AnimeDetails