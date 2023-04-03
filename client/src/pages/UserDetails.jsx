import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { GetSingleUser } from "../services/auth"
import { GetAllByUserId } from "../services/review"
import CreateRecommendation from "./CreateRecommendation"
import { UpdateUser } from "../services/auth"

const UserDetails = ({ user, setUser  }) => {
  const [userDetails, setUserDetails] = useState(false)
  const {id} = useParams()
  const [userData, setUserData] = useState(false)
  const [written, setWritten] = useState(false)
  const [writingRec, setWritingRec] = useState(false)
  const [editingUser, setEditingUser] = useState(false)
  const [viewingWatched, setViewingWatched] = useState(false)
  const [viewingRecs, setViewingRecs] = useState(true)
  const [viewingReviews, setViewingReviews] = useState(false)
  
  const toggleWritingRec = () => {
    setWritingRec(!writingRec)
  }
  const toggleEditingUser = () => {
    setEditingUser(!editingUser)
  }



  useEffect(()=>{
    const grabUserDetails = async(id) => {
      setUserDetails(await GetSingleUser(id))
      setUserData(await GetAllByUserId(id))
    }
    grabUserDetails(id)
  },[written])
  // console.log(userDetails)
  console.log(userData)
  // console.log(userData.data.recs.length)


  return <div>
    {userData && userDetails  ? (
      <div>

      <div className="userTop">
        <div className="userStack">
        <img src={userDetails.data.profile_pic} className='userPagePic'/>
        <h3>{userDetails.data.bio}</h3>
        {userDetails &&  user && (user.id === userDetails.data.id) ? (
        <div className="column">
          <button onClick={toggleEditingUser}>Edit Profile?</button>
          <button onClick={toggleWritingRec}>Make Recommendation?</button>
          </div>
          ) : (<div></div>) }
        </div>

        <h1>{userDetails.data.username}</h1>

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
      <h1>watched, reviews, recs</h1>


      <div className="flex">

        {viewingWatched ? (
           <div className="userColumn">
           <h1>watched</h1>
           {userData.data.watched.length === 0 ? (<p>User has no watched</p>) : (<div>
             {userData.data.watched.map((watched)=>(
               <div>
                 <img src={watched.animePic} className="userWatchedPic"/>
                 <p>{watched.animeName}</p>
               </div>
             ))}
           </div>)}
         </div>
 
        ) : (<></>)}

       {viewingRecs ? (
        <div>
            {userData.data.reviews.length === 0 ? (<p>User has no watched</p>) : (<div>
             {userData.data.reviews.map((review)=>(
               <div>
                 <img src={review.animePic} className="userWatchedPic"/>
                 <p>{review.animeName}</p>
               </div>
             ))}
           </div>)}
        </div>

       ) : (<></>)}
       {viewingReviews ? (
        <div>
          <h1>recs</h1>
        </div>

       ) : (<></>)}
        
        {writingRec ? (
          <div className="modal">
            <div className="overlay">
            <CreateRecommendation user={user} watched={userData.data.watched} toggleWritingRec={toggleWritingRec} setWritten={setWritten} written={written}/>
            </div>
          </div>
        ) : (<div></div>)}
        {editingUser ? (<div></div>) : (<div></div>)}
      </div>
      </div>

    ) : (<h1>Loading...</h1>)}
    

  </div>
}
export default UserDetails