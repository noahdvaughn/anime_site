import { useEffect, useState } from "react"
import { GetRecs } from "../services/recommended"
import {Link, useParams} from "react-router-dom"
import greenArrow from '../assets/arrow-xxl.png'
import redArrow from '../assets/red-arrow.png'
import { UpdateUser } from "../services/auth"
import { UpdateRec } from "../services/recommended"



const Recommendations = ({user, setUser}) => {
  const [recs, setRecs] = useState(null)
  const [written, setWritten] = useState(false)
  const [newUser, setNewUser] = useState(null)

  useEffect(()=>{
    if (newUser){
      setUser(newUser.data.user)
    }
  }, [newUser])
  useEffect(()=>{
    const grabRecs = async() => {
      setRecs( await GetRecs())
    }
    grabRecs()
  },[written])

  const userUpvote = async(recId, upvotes) => {

    if (user.upvoted.includes(recId) || user.downvoted.includes(recId)){
      return
    } else {
    setNewUser(await UpdateUser(user.id, {
      upvoted: [...user.upvoted, recId]
    }))
    await UpdateRec(recId, {
      upvotes: (upvotes += 1)})
    setWritten(!written)
  }
}
  const userDownvote = async(recId, downvotes) => {

    if(user.upvoted.includes(recId) || user.downvoted.includes(recId)){
      return
    } else {
   setNewUser( await UpdateUser(user.id, {
      downvoted: [...user.downvoted, recId]
    }))
    await UpdateRec(recId, {
      downvotes: (downvotes += 1)})
    setWritten(!written)
  }
}

  console.log(recs)

  return <div className="recBody">
    <h1>Top Recommendations</h1>
    {recs ? (
      <div className="">
        {recs.data.map((rec)=>(
          <div className="flex rec">

            <div className="column">
              <div className="flex">
            <img src={greenArrow} className={`recsArrow ${user && user.upvoted.includes(rec.id) ? 'votedOn' : '' }`} onClick={()=>{
              userUpvote(rec.id, rec.upvotes)
            }}/>
              <p>{rec.upvotes}</p>
              </div>

            <div className="flex">
            <img src={redArrow} className={`recsArrow ${user && user.downvoted.includes(rec.id) ? 'votedOn' : '' }`} onClick={()=>{
              userDownvote(rec.id, rec.downvotes)
            }}/>
            <p>{rec.downvotes}</p>
            </div>
            </div>

            <Link to={`/user/${rec.userId}`} className='column white'>
            <img src={rec.userPic} className='reviewUser'/>
            <p>{rec.userName}</p>
            </Link>

            <div>
              <p>If you like...</p>
              <Link to={`/details/${encodeURIComponent(rec.animeName)}/${rec.animeId}`} className='white'>
              <img src={rec.animePic} className='recAnimePic'/>
              <p>{rec.animeName}</p>

              </Link>
            </div>

            <h3 className="recDetails">"{rec.body}"</h3>

            <div>
              <p>You'll like</p>
              <Link to={`/details/${encodeURIComponent(rec.recommendedName)}/${rec.recommendedId}`} className='white'>
              <img src={rec.recommendedPic} className='recAnimePic'/>
              <p>{rec.recommendedName}</p>
              
              </Link>
            </div>



          </div>
        ))}
      </div>
    ) : (<h1>Loading...</h1>)}
  </div>
}
export default Recommendations