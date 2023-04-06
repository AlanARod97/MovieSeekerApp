import Styles from './Search.module.css';
import {FaSearch} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useQuery} from '../hooks/useQuery';

export default function Search (){
    const query = useQuery();
    const search = query.get("search")

    const [searchText, setSearchText] =useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        setSearchText(search);
    }, [search])
   
    const handleSubmit=(e) =>{
      
        e.preventDefault();
        navigate("/?search=" + searchText);
    }
    return(
        <form className={Styles.searchContainer} onSubmit={handleSubmit}>
            <div className={Styles.searchBox}>
                <input 
                className={Styles.searchInput} 
                type="text" value={searchText} 
                onChange={(e)=> setSearchText(e.target.value)}  
                />
                <button className={Styles.searchButton} type="submit">
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}