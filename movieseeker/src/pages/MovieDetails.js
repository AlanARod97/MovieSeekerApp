import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Styles from './MovieDetails.module.css';
import get from '../utils/httpClient';


export default function MovieDetails(){

  const{movieId} = useParams();
  const[movie, setMovie]=useState(null)
  
  useEffect(()=>{
    get("/movie/" + movieId).then(data=>{
      setMovie(data);
    })
  }, [movieId])

  if(!movie){
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
    <div className={Styles.detailsContainer}>
      <img className={`${Styles.col} ${Styles.movieImage}`} src={imageUrl} alt=""/>
      <div className={`${Styles.col} ${Styles.movieDetails}`}>
        <p className={Styles.firstItem}><strong>Title:</strong> {movie.title}</p>
        <p>
         <strong>Genres:</strong>{" "}
         {movie.genres.map(genre => genre.name).join(", ")}
        </p>
        <p><strong>Description:</strong> {movie.overview}</p>

      </div>
    </div>
    )
}