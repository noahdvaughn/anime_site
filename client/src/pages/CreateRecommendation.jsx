import x from '../assets/x.png'
import { useEffect, useState } from "react"
import { CreateRec } from '../services/recommended'

const CreateRecommendation = ({watched, user, toggleWritingRec, setWritten, written}) => {
  

  const initialState = {
    userId: user.id,
    userName: user.name,
    userPic: user.pic,
    animeId: 0,
    animeName: '',
    animePic: '',
    recommendedId: 0,
    recommendedName: '',
    recommendedPic: '',
    body: '',
    upvotes: 0,
    downvotes: 0,
    
  }
  const [formState, setFormState] = useState(initialState)
  const [referenceIds, setReferenceIds] = useState({
    anime1Ref: 0,
    anime2Ref: 0
  })
  const handleIdChange = (event) => {
    setReferenceIds({...referenceIds, [event.target.id]: parseInt(event.target.value)})
  }
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    console.log('hit')
    event.preventDefault()
    await CreateRec({...formState, 
      animeId: watched[referenceIds.anime1Ref].animeId, 
      animeName: watched[referenceIds.anime1Ref].animeName,
      animePic: watched[referenceIds.anime1Ref].animePic,
      recommendedId: watched[referenceIds.anime2Ref].animeId, 
      recommendedName: watched[referenceIds.anime2Ref].animeName,
      recommendedPic: watched[referenceIds.anime2Ref].animePic,
    })
    setFormState(initialState)
    setWritten(!written)
    toggleWritingRec()
  }


  return <div className="loginDiv">
  <img src={x} className='icon loginX' onClick={toggleWritingRec}/>
  <h1>Create Recommendation</h1>

  <form className="reviewForm" onSubmit={handleSubmit}>
      <label htmlFor="Anime">
        If you like
      </label>
      <select
        className="rounded-input"
        id="anime1Ref"
        onChange={handleIdChange}
        value={referenceIds.anime1Ref}
      >
        {watched.map((anime, i)=> (
          <option value={parseInt(i)}>{anime.animeName}</option>
        ))}
      </select>

      <label htmlFor="rating">
        Then you'll like:
      </label>
      <select
        className="rounded-input"
        id="anime2Ref"
        onChange={handleIdChange}
        value={referenceIds.anime2Ref}
      >
         {watched.map((anime, i)=> (
          <option value={parseInt(i)}>{anime.animeName}</option>

        ))}
      </select>
      <label htmlFor="body">
        Tell us why
      </label>
      <input
        className="rounded-input"
        type="text"
        id="body"
        onChange={handleChange}
        value={formState.body}
      />
      {referenceIds.anime1Ref === referenceIds.anime2Ref ? (<p className='flex'>Recommended anime must be different from original anime</p>) : (<button type="submit">Submit Review</button>)}
      
    </form>
</div>
}
export default CreateRecommendation