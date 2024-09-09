import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';
function Player() {

  const {id} = useParams();

  const navigate = useNavigate();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjczMDRkYmY1M2RkNTA3ZThlZTU1NzU0YzI1Y2NhZCIsIm5iZiI6MTcyNTc5OTQyMy42MzY0MDYsInN1YiI6IjY2ZGQ5YWQyYzAwN2I0NGZhODlkZGI2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.clpdJ6vPco8hWH0r5T29DHkTv46zudGkw8zr19B0GKA'
    }
  };

  const [apiData, setApiData] =useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  }, [])
    
  return (
    <div className='Player'>
      <img src={back_arrow} alt="" onClick={() => {navigate(-2)}} />
      <iframe width='90%' height='90%'
      src={`https:/www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen ></iframe> 

      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
        </div>     
    </div>
  )
}

export default Player
