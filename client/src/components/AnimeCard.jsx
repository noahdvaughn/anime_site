import React from 'react'
import { Link } from "react-router-dom"


const AnimeCard = ({anime}) => {
 
  return (
    <Link to={`/details/${anime.title}/${anime.id}`} className='animeCardDiv'>
        <img className='animeCardPic' src={`${anime.main_picture.medium}`}/>
        <h3 className='animeCardTitle'>{anime.title}</h3>
    </Link>
  )
}

export default AnimeCard