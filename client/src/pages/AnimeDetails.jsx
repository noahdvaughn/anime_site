import {Link, useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { GetDetails } from "../services/anime"
import { GetAllByAnimeId } from "../services/recommended"
import CreateReview from "./CreateReview"
import EditReview from "./EditReview"


const AnimeDetails = ({user}) => {
  const {animeId, animeName} = useParams()
  const [details, setDetails] = useState()
  const [data, setData] = useState(null)
  const [modal, setModal] = useState(false)
  const [edit, setEdit] = useState(false)
  const [written, setWritten] = useState(false)
  const [currentReview, setCurrentReview] = useState() 

  useEffect(()=>{
    const grabDetails = async(animeId) => {
      setDetails(await GetDetails(animeId))
    }
    const grabDataByAnime = async(animeId) => {
      setData(await GetAllByAnimeId(animeId))
    }
    grabDataByAnime(animeId)
    grabDetails(animeId)
  },[written])
  
  const toggleModal = () => {
    setModal(!modal)
  }
  const toggleEditing = () => {
    

    setEdit(!edit)
  }
  console.log(data)
  


  return <div >
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
        <EditReview id={animeId} name={animeName} year={details.data.start_date.slice(0,4)} genre={details.data.genres} user={user} toggleModal={toggleModal} setWritten={setWritten} written={written}/>
      </div>
    </div>
    )}

    {data ? (<>
        <h3>Reviews: </h3>
        <div>
          {data.data.reviews.map((review)=>(
            <div className="review">
              <Link className="reviewLink" to={`/user/${review.userId}`}>
              <img src={review.userPic} className='reviewUser'/>
              <p className="reviewName">{review.userName}</p>
              </Link>
              <p className="reviewComment">{review.body}</p>
              <p className="reviewRating">{review.rating}/10</p>
              { user && (user.id === review.userId || user.id === 1) ? (<button onClick={()=>{setCurrentReview(review), toggleEditing()}}>Edit Review?</button>) : (<div></div>) }
              {edit && (
                <div className="modal">
                  <div className="overlay">
                    <EditReview  review={currentReview} user={user} toggleEditing={toggleEditing} setWritten={setWritten} written={written}/>
                  </div>
                </div>)}
            </div>
          ))}
        </div>
    </>) : (
      <div>
        </div>
      )}
    </div>
  
}
export default AnimeDetails