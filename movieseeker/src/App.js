import LandingPage from './components/LandingPage';
import Styles from './App.module.css';
import {BrowserRouter, Routes,Route,Link } from "react-router-dom";
import MovieDetails from './pages/MovieDetails.js';
import NavBar from './NavBar/NavBar';


export default function App(){
    return (

    
    <BrowserRouter>
        <header>

        <NavBar/>
            
            <Link to="/ "> <h1 className={Styles.title}>Movies</h1> </Link>
            
        </header>

        <main>
            
            <Routes>
            <Route exact path="/movies/:movieId" element={<MovieDetails/>}/> 
            <Route path="/" element={<LandingPage />} />
           
           
    
            </Routes>
           
        </main>
        </BrowserRouter>)
}