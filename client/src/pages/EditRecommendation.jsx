import x from '../assets/x.png'
import { useEffect, useState } from "react"
import { UpdateRec, DeleteRec } from '../services/recommended'



const EditRecommendation = ({rec, toggleEditingRec, setWritten, written}) => {
  const initialState = {
    body: rec.body,
  }
  const [formState, setFormState] = useState(initialState)



  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    console.log('hit')
    event.preventDefault()
    await UpdateRec(rec.id, formState)
    setFormState(initialState)
    setWritten(!written)
    toggleEditingRec()
  }
  const handleDelete = async (event) => {
    event.preventDefault()
    await DeleteRec(rec.id)
    setWritten(!written)
    toggleEditingRec()
  }

  return <div className="reviewDiv">
  <img src={x} className='icon' onClick={toggleEditingRec}/>
  <h1>Update recommendation</h1>

  

  <form className="reviewForm" onSubmit={handleSubmit}>
      <label htmlFor="comment">
        Body
      </label>
      <input
        className="rounded-input"
        type="text"
        id="body"
        onChange={handleChange}
        value={formState.body}
      />
      <button type="submit">Update Recommendation</button>
    </form>
    <button onClick={handleDelete}>Delete Recommendation</button>
</div>
}
export default EditRecommendation