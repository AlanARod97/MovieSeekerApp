import styles from './MovieCard.module.css';
import {Link} from 'react-router-dom';
import placeholder from '../placeholder.png';


export default function MovieCard({movie}){
    const imageUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w300" + movie.poster_path : placeholder;
    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id}>
            <img className={styles.movieImage} src={imageUrl} alt={movie.title} width={230} height={345}/>
            </Link>
            <div>{movie.title}</div>
        </li>
    )
}