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
  
  const toggleWritingRec = () => {
    setWritingRec(!writingRec)
  }



  useEffect(()=>{
    const grabUserDetails = async(id) => {
      setUserDetails(await GetSingleUser(id))
      setUserData(await GetAllByUserId(id))
    }
    grabUserDetails(id)
  },[written])
  console.log(userDetails)
  console.log(userData)
  // console.log(userData.data.recs.length)


  return <div>
    {userData && userDetails  ? (
      <div>

      <div className="flex">
        <div>
        <img src={userDetails.data.profile_pic} className='userPagePic'/>
        <h3>{userDetails.data.bio}</h3>
        {userDetails &&  user && (user.id === userDetails.data.id) ? (<button>Edit Profile?</button>) : (<div></div>) }
        </div>
        <h1>{userDetails.data.username}</h1>

        <div>
        <h3>{userData.data.reviews.length}</h3>
        <h3>Reviews</h3>
        </div>
        <div>
        <h3>{userData.data.watched.length}</h3>
        <h3>Animes watched</h3>
        </div>
        <div>
        <h3>{userData.data.recs.length}</h3>
        <h3>Recommendations Made</h3>
        </div>
        <div>
        <h3>{(userDetails.data.friend_list.length / 3)}</h3>
        <h3>Friends</h3>
        </div>

      </div>
      <div>
        {userDetails &&  user &&(user.id === userDetails.data.id) ? (<button onClick={toggleWritingRec}>Make Recommendation?</button>) : (<div></div>) }
        {writingRec ? (
          <div className="modal">
            <div className="overlay">
            <CreateRecommendation user={user} watched={userData.data.watched} toggleWritingRec={toggleWritingRec} setWritten={setWritten} written={written}/>

            </div>
          </div>
        ) : (<div></div>)}
      </div>
      </div>

    ) : (<h1>Loading...</h1>)}
    

  </div>
}
export default UserDetails