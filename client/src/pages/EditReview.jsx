import x from '../assets/x.png'
import { useEffect, useState } from "react"
import { UpdateReview, DeleteReview } from '../services/review'
import {Link, useNavigate} from 'react-router-dom'

const EditReview = ({review, toggleEditing, setWritten, written}) => {
  console.log(review)
  const initialState = {
    body: review.body,
    rating: review.rating
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    console.log('hit')
    event.preventDefault()
    await UpdateReview(review.id, formState)
    setFormState(initialState)
    setWritten(!written)
    toggleEditing()
  }
  const handleDelete = async (event) => {
    event.preventDefault()
    await DeleteReview(review.id)
    setWritten(!written)
    toggleEditing()
  }



  return <div className="reviewDiv">
  <img src={x} className='icon' onClick={toggleEditing}/>
  <h1>Update review for {review.animeName}</h1>

  <form className="reviewForm" onSubmit={handleSubmit}>
      <label htmlFor="rating">
        Rating
      </label>
      <select
        className="rounded-input"
        id="rating"
        onChange={handleChange}
        value={formState.rating}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
      <label htmlFor="comment">
        Comment
      </label>
      <input
        className="rounded-input"
        type="text"
        id="body"
        onChange={handleChange}
        value={formState.body}
      />
      <button type="submit">Update Review</button>
    </form>
    <button onClick={handleDelete}>Delete Review?</button>
</div>
}
export default EditReview