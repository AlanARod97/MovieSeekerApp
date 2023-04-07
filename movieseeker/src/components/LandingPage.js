import MoviesGrid from './MoviesGrid';
import Search from './Search';
import {useQuery} from '../hooks/useQuery';

export default function LandingPage(){
    const query = useQuery();
    const search = query.get("search")
    return (
        <div>
            <Search/>
            <MoviesGrid key={search} search={search}/>
        </div>
    )
}