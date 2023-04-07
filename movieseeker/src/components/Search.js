import Styles from './Search.module.css';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {useQuery} from '../hooks/useQuery';

export default function Search (){
    const query = useQuery();
    const search = query.get("search")

   
    const navigate = useNavigate();

  
   
    const handleSubmit=(e) =>{
      
        e.preventDefault();
       
    }
    return(
        <form className={Styles.searchContainer} onSubmit={handleSubmit}>
            <div className={Styles.searchBox}>
                <input 
                className={Styles.searchInput} 
                type="text" value={search} 
                placeholder='Title'
                onChange={(e)=> {
                    const value = e.target.value;
                    
                     navigate("/?search=" + value);
                }}  
                />
            
                    <FaSearch size={20} color="black" className={Styles.searchButton} />
                
            </div>
        </form>
    )
}