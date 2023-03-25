import MovieCard from './MovieCard';
import Styles from './MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import get from '../utils/httpClient';

export default function MoviesGrid() {


    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        get("/discover/movie").then(data => {
            setMovies(data.results)

        })
    }, []);

    return (
        <ul className={Styles.moviesGrid}>
            {movies.map((movie) =>
                <MovieCard key={movie.id} movie={movie} />
            )}
        </ul>
    );
}