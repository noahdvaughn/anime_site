import { useEffect, useState } from "react"
import { GetRecs } from "../services/recommended"
import {Link, useParams} from "react-router-dom"
import greenArrow from '../assets/arrow-xxl.png'
import redArrow from '../assets/red-arrow.png'


const Recommendations = () => {
  const [recs, setRecs] = useState(null)

  useEffect(()=>{

    const grabRecs = async() => {
      setRecs( await GetRecs())
    }
    grabRecs()
    
  },[])
  console.log(recs)

  return <div>
    <h1>Top Recommendations</h1>
    {recs ? (
      <div>
        {recs.data.map((rec)=>(
          <div className="flex">
            <div className="column">
            <img src={greenArrow} className='recsArrow'/>
            <img src={redArrow} className='recsArrow'/>
            </div>
            <div className="column">
              <p>{rec.upvotes}</p>
              <p>{rec.downvotes}</p>
            </div>

            <Link to={`/user/${rec.userId}`} className='column'>
            <img src={rec.userPic} className='reviewUser'/>
            <p>{rec.userName}</p>
            </Link>

            <div>
              <p>If you like...</p>
              <Link to={`/details/${encodeURIComponent(rec.animeName)}/${rec.animeId}`}>
              <img src={rec.animePic} className='recAnimePic'/>
              <p>{rec.animeName}</p>

              </Link>
            </div>

            <h3>"{rec.body}"</h3>

            <div>
              <p>You'll like</p>
              <img src={rec.recommendedPic} className='recAnimePic'/>
              <p>{rec.recommendedName}</p>
            </div>



          </div>
        ))}
      </div>
    ) : (<h1>Loading...</h1>)}
  </div>
}
export default Recommendations