import x from '../assets/x.png'
import { useEffect, useState } from "react"
import { CreateRec } from '../services/recommended'

const CreateRecommendation = ({watched, user}) => {

  const initialState = {
    userId: user.id,
    userName: user.name,
    userPic: user.pic,
    animeId: '',
    animeName: '',
    animePic: '',
    recommendedName: '',
    recommendedPic: '',
    body: '',
    upvotes: 0,
    downvotes,
  }
  const [formState, setFormState] = useState(initialState)



  return <div>
    <h1>CreateRecommendation</h1>
  </div>
}
export default CreateRecommendation