import { UpdateUser } from "../services/auth"
import { useEffect, useState } from "react"
import x from '../assets/x.png'



import React from 'react'

const EditUser = ({userDetails, toggleEditingUser, setWritten, written}) => {
  console.log(userDetails)
  console.log(userDetails.data.id)

  const initialState = {
    bio: userDetails.data.bio,
    profile_pic: userDetails.data.profile_pic
  }
  const [formState, setFormState] = useState(initialState)
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {

    event.preventDefault()
    await UpdateUser(userDetails.data.id, formState)
    setFormState(initialState)
    setWritten(!written)
    toggleEditingUser()
  }


  return (
    <div className="reviewDiv">
    <img src={x} className='icon' onClick={toggleEditingUser}/>
    <h1>Update User</h1>
  
    
  
    <form className="reviewForm" onSubmit={handleSubmit}>
        <label htmlFor="bio">
          Bio
        </label>
        <input
          className="rounded-input"
          type="text"
          id="bio"
          onChange={handleChange}
          value={formState.bio}
        />

        <label htmlFor="profile_pic">
          Profile Picture
        </label>
        <input
          className="rounded-input"
          type="text"
          id="profile_pic"
          onChange={handleChange}
          value={formState.profile_pic}
        />
        <button type="submit">Update User</button>
      </form>
  </div>
  )
}

export default EditUser