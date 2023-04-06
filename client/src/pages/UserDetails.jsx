import {useParams, Link} from "react-router-dom"
import { useEffect, useState } from "react"
import { GetSingleUser } from "../services/auth"
import { GetAllByUserId } from "../services/review"
import CreateRecommendation from "./CreateRecommendation"
import { UpdateUser } from "../services/auth"
import EditUser from "./EditUser"

const UserDetails = ({ user, setUser  }) => {
  const [userDetails, setUserDetails] = useState(false)
  const {id} = useParams()
  const [userData, setUserData] = useState(false)
  const [written, setWritten] = useState(false)
  const [writingRec, setWritingRec] = useState(false)
  const [editingUser, setEditingUser] = useState(false)

  const [viewingWatched, setViewingWatched] = useState(true)
  const [viewingRecs, setViewingRecs] = useState(false)
  const [viewingReviews, setViewingReviews] = useState(false)
  let averageScore = 0

  if (userData){
    userData.data.reviews.forEach((review)=>{
      averageScore += review.rating
    })
    averageScore = (averageScore / userData.data.reviews.length)
  }


  const toggleWritingRec = () => {
    setWritingRec(!writingRec)
  }
  const toggleEditingUser = () => {
    setEditingUser(!editingUser)
  }
  const toggleAllOff = () => {
    setViewingWatched(false)
    setViewingReviews(false)
    setViewingRecs(false)
  }

  const toggleViewingW = () => {
    toggleAllOff()
    setViewingWatched(!viewingWatched)
  }
  const toggleViewingRecos = () => {
    toggleAllOff()
    setViewingRecs(!viewingRecs)
  }
  const toggleViewingRevs = () => {
    toggleAllOff()
    setViewingReviews(!viewingReviews)
  }



  useEffect(()=>{
    const grabUserDetails = async(id) => {
      setUserDetails(await GetSingleUser(id))
      setUserData(await GetAllByUserId(id))
    }
    grabUserDetails(id)
  },[written])


  return <div>
    {userData && userDetails  ? (
      <div>

      <div className="userTop">
        <div className="userStack">
        <img src={userDetails.data.profile_pic} className='userPagePic'/>
        <h3>{userDetails.data.bio}</h3>
        {userDetails &&  user && (user.id === userDetails.data.id) ? (
        <div className="column">
          <button onClick={toggleEditingUser} className="userButton">Edit Profile?</button>
          <button onClick={toggleWritingRec} className="userButton">Make Recommendation?</button>
          </div>
          ) : (<div></div>) }
        </div>

        <h1 className="userName">{userDetails.data.username}</h1>

        <div className="userStats">
        <h3>{userData.data.reviews.length}</h3>
        <h3>Reviews</h3>
        </div>

        <div className="userStats">
        <h3>{userData.data.watched.length}</h3>
        <h3>Watched</h3>
        </div>
        <div className="userStats">
        <h3>{userData.data.recs.length}</h3>
        <h3>Recs</h3>
        </div>
        <div className="userStats">
        <h3>{(userDetails.data.friend_list.length / 3)}</h3>
        <h3>Following</h3>
        </div>
      </div>

      <div className="userSelect">
        <h2 onClick={toggleViewingW} className="userSelectW">Watched</h2>
        <h2 onClick={toggleViewingRevs} className="userSelectRev">Reviews</h2>
        <h2 onClick={toggleViewingRecos} className="userSelectRec">Recs</h2>
      </div>

      <div className="flex">
        {viewingWatched ? (
           <div >
           <h2 className="Roboto pinkUL">Anime watched</h2>
           {userData.data.watched.length === 0 ? (<p>User has no watched</p>) : (
           <div className="userColumn"> 
             {userData.data.watched.map((watched)=>(
               <Link to={`/details/${encodeURIComponent(watched.animeName)}/${watched.animeId}`} className="userWatched white">
                 <img src={watched.animePic} className="userWatchedPic"/>
                 <h2 className="Roboto ">{watched.animeName}</h2>
               </Link>
             ))}
           </div>)}
         </div>
 
        ) : (<></>)}

       {viewingReviews ? (
        <div>
            {userData.data.reviews.length === 0 ? (<p>User has no reviews</p>) : (
              <div>
                <h2 className="Roboto pinkUL">{userDetails.data.username}'s Reviews</h2>
              <h3>Average Review Score: {averageScore.toFixed(2)}</h3>
             {userData.data.reviews.map((review)=>(
               <div>
                <Link to={`/details/${encodeURIComponent(review.animeName)}/${review.animeId}`} className="userReview white">
                 <img src={review.animePic} className="userWatchedPic"/>
                 <p>{review.animeName}</p>
                 <p>{review.rating}/10</p>
                 <p className="userReviewBody">"{review.body}"</p>
                </Link>
               </div>
             ))}
           </div>)}
        </div>

       ) : (<></>)}

       {viewingRecs ? (
        <div>
          {userData.data.reviews.length === 0 ? (<p>User has no recommendations</p>) : (
            <div>
                <h2 className="Roboto pinkUL">{userDetails.data.username}'s Recs</h2>

          {userData.data.recs.map((rec)=>(
               <div className="userRec">
                

                <Link to={`/details/${encodeURIComponent(rec.animeName)}/${rec.animeId}`} className=" white centerColumn">
                 <img src={rec.animePic} className="userWatchedPic"/>
                 <p>{rec.animeName}</p>
                 </Link>

                 <h2 className="Bangers userRecBody">"{rec.body}"</h2>

                <Link to={`/details/${encodeURIComponent(rec.recommendedName)}/${rec.recommendedId}`} className=" white centerColumn" >
                 <img src={rec.recommendedPic} className="userWatchedPic"/>
                 <p>{rec.recommendedName}</p>
                 </Link>

               </div>
             ))}
           </div>)}
        </div>
       ) : (<></>)}
       
        
        {writingRec ? (
          <div className="modal">
            <div className="overlay">
            <CreateRecommendation user={user} watched={userData.data.watched} toggleWritingRec={toggleWritingRec} setWritten={setWritten} written={written}/>
            </div>
          </div>
        ) : (<div></div>)}
        {editingUser ? (
          <div className="modal">
            <div className="overlay">
            <EditUser userDetails={userDetails} toggleEditingUser={toggleEditingUser} setWritten={setWritten} written={written}/>
            </div>
            </div>
            ) : (<div></div>)}
      </div>
      </div>

    ) : (<h1>Loading...</h1>)}
    

  </div>
}
export default UserDetails