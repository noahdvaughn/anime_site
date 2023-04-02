import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { GetSingleUser } from "../services/auth"
import { GetAllByUserId } from "../services/review"

const UserDetails = ({ user }) => {
  const [userDetails, setUserDetails] = useState(false)
  const {id} = useParams()
  const [userData, setUserData] = useState(false)



  useEffect(()=>{
    const grabUserDetails = async(id) => {
      setUserDetails(await GetSingleUser(id))
      setUserData(await GetAllByUserId(id))
    }
    grabUserDetails(id)
  },[])
  // console.log(userDetails)
  console.log(userData)
  // console.log(userData.data.recs.length)


  return <div>
    {userData && userDetails  ? (
      <div className="flex">
        <img src={userDetails.data.profile_pic} className='userPagePic'/>
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
    ) : (<h1>Loading...</h1>)}
    

  </div>
}
export default UserDetails