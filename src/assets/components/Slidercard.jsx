import React from 'react'
import { Link } from 'react-router-dom'
const API_image = "https://image.tmdb.org/t/p/w500/"
export default function Slidercard({element, title="title", type}) {
  return (
    <Link className="sliderCard" to={`/details/${type}/${element.id}/${title}`}>
        <div className='cardImage' ><img src={API_image + element.poster_path} alt='image'/></div>
    </Link>
  )
}
