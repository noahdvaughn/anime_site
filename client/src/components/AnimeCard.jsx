import React from 'react'
import { Link } from "react-router-dom"


const AnimeCard = ({anime}) => {
 
  return (
    <Link to={`/details/${anime.title}/${anime.id}`}>
    <div>
        <img src={`${anime.main_picture.medium}`}/>
        <h3>{anime.title}</h3>
        </div>
    </Link>
    
  )
}

export default AnimeCard