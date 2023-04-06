import MovieCard from './MovieCard';
import Styles from './MoviesGrid.module.css';
import { useEffect, useState } from 'react';
import get from '../utils/httpClient';
import Spinner from './Spinner';
import {useQuery} from '../hooks/useQuery';



export default function MoviesGrid() {


    const [movies, setMovies] = useState([]);
    const[isLoading, setIsLoading]= useState(true);

    const query = useQuery();
    const search = query.get("search")

    useEffect(() => {
        const searchUrl= search ? "/search/movie?query=" + search : "/discover/movie";
        get(searchUrl).then(data => {
            setMovies(data.results)
            setIsLoading(false);
        })
    }, [search]);

    if(isLoading){
        return <Spinner/>
    }

    return (
        <ul className={Styles.moviesGrid}>
            {movies.map((movie) =>
                <MovieCard key={movie.id} movie={movie} />
            )}
        </ul>
    );
}