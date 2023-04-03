import x from '../assets/x.png'
import { useEffect, useState } from "react"
import { MakeReview } from '../services/review'
import {Link, useNavigate} from 'react-router-dom'





const CreateReview = ({id, name, year, genre, user, toggleModal,setWritten, written, pic }) => {
  console.log(pic)

  let genreArray = []
  genre.forEach((genre)=>{
    genreArray.unshift(genre.name)
  })
  const initialState = {
    userId: user.id,
    userName: user.name,
    userPic: user.pic,
    animeId: parseInt(id),
    animeName: name,
    animePic: pic,
    body: '',
    rating: 1,
    yearCreated: parseInt(year),
    genre: genreArray
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  
  const handleSubmit = async (event) => {
    console.log('hit')
    event.preventDefault()
    await MakeReview(formState)

    setFormState(initialState)
    setWritten(!written)
    toggleModal()
  }


  return <div className="reviewDiv">
    <img src={x} className='icon' onClick={toggleModal}/>
    <h1>Review for {name}</h1>

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
        <button type="submit">Submit Review</button>
      </form>
  </div>
}
export default CreateReview