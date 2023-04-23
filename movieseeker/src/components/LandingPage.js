import MoviesGrid from './MoviesGrid';
import Search from './Search';
import {useQuery} from '../hooks/useQuery';
import { useDebounce } from '../hooks/useDebounce';

export default function LandingPage(){
    const query = useQuery();
    const search = query.get("search")

    const debouncedSearch = useDebounce(search, 300);
    return (
        <div>
        
            <Search/>
            <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
    )
}