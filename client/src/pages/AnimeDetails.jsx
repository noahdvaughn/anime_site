import {Link, useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { GetDetails } from "../services/anime"
import { GetAllByAnimeId } from "../services/recommended"
import CreateReview from "./CreateReview"
import EditReview from "./EditReview"
import { UpdateUser } from "../services/auth"
import { CreateWatched } from "../services/watched"


const AnimeDetails = ({user,setUser}) => {
  const {animeId, animeName} = useParams()
  const [details, setDetails] = useState()
  const [data, setData] = useState(null)
  const [modal, setModal] = useState(false)
  const [edit, setEdit] = useState(false)
  const [written, setWritten] = useState(false)
  const [currentReview, setCurrentReview] = useState() 
  const [newUser, setNewUser] = useState(null)

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

  useEffect(()=>{
    if (newUser){
      
      setUser(newUser.data.user)
    }
  }, [newUser])
  
  const toggleModal = () => {
    setModal(!modal)
  }
  const toggleEditing = () => {
    setEdit(!edit)
  }
  const addToWatched = async() => {
    let newWatched = await CreateWatched(user.id, {
      userId: user.id,
      animeId: parseInt(animeId),
      animeName: animeName,
      animePic: details.data.main_picture.large
    })
    setNewUser(await UpdateUser(user.id, {
      watched_list: [...user.watched, animeId]
    }))
  }
  


  return <div className="noTop">
    {details ? (
      <div className="animeDetailsBody">

      <div className="animeDetailsTop">
        <img src={details.data.main_picture.large} className='detailsImage'/>

        <div className="detailsColumn">
          <h1 className="pinkUL flex">{details.data.title}</h1>
          <h2 >{details.data.alternative_titles.ja}</h2>
          <div>
            <h3>Genres:</h3>
            {details.data.genres.map((genre)=>(
              <p key={genre.name}>-{genre.name}</p>
            ))}
          </div>
          <div className="detailsColumn">
            <h3>Studios: </h3>
            {details.data.studios.map((studio)=>(
              <p key={studio.name}>-{studio.name}</p>
            ))}
          </div>
          <h3>{details.data.num_episodes} Episodes, {details.data.status.replaceAll('_', ' ')}</h3>
          <h3>Start Date: {details.data.start_date.replaceAll('-', '/')}</h3>
        </div>
      </div>
      <>
        <p className="black Roboto">{details.data.synopsis}</p>
      </>
      </div>
    ) : 
    (<h1>Loading</h1>)}



    {user ? (
      user && user.watched.includes(parseInt(animeId)) ? (
        <div className="flex column">
          <h3 className="green">Anime Seen!</h3>
          <button onClick={toggleModal}>Make A Review</button>
        </div>
      ) : (
        <div className="flex">
          <button onClick={addToWatched}>Add to watched</button>
        </div>
      )
      
    ): (<p className="flex italic">Log in to add to your watched list and make a review</p>)}
    {modal && (
    <div className="modal">
      <div className="overlay">
        <CreateReview id={animeId} name={animeName} year={details.data.start_date.slice(0,4)} genre={details.data.genres} user={user} toggleModal={toggleModal} setWritten={setWritten} written={written} pic={details.data.main_picture.large}/>
      </div>
    </div>
    )}

    {data ? (<div >
        <h3 className="flex">Reviews: </h3>
          {data.data.reviews.length === 0 ? (<h3 className="flex">None yet</h3>) : (<></>)}
        <div className="flex column">
          {data.data.reviews.map((review)=>(
            <div className="review black">
              <Link className="reviewLink" to={`/user/${review.userId}`}>
              <img src={review.userPic} className='reviewUser'/>
              <p className="reviewName">{review.userName}</p>
              </Link>
              <p className="reviewComment detailsRecBody">{review.body}</p>
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
    </div>) : (
      <></>
      )}
    </div>
  
}
export default AnimeDetails