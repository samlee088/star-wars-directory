import React, { useEffect, useState } from 'react';
import axios from '../axios';
import {useNavigate} from 'react-router-dom';
import './AllMoviesDisplay.css';

function AllMoviesDisplay() {

    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);

    useEffect(() =>  {
        async function queryMovies() {
            let request = await axios.get('films');
            let sortedMovies = sortMovies(request.data.results)
            setMovies(sortedMovies);
            console.log(request.data.results);
            console.log(movies)
            return request
        }
       
        queryMovies()
        sortMovies(movies)

    },[])

    function sortMovies(movies) {

       const sortedMovies = [...movies]
       sortedMovies.sort((a,b) => a.episode_id - b.episode_id);
       return sortedMovies
    }


    async function singeMovieRoute(movieUrl) {
        navigate('/SingleMovie', {state: {movieUrl: movieUrl}})
    }
    
    return(

        <div className='allMoviesDisplay'>
            <div className='allMoviesCard'>

                <h1>Star Wars Movies</h1>
                <div className='allMoviesList'>  
                    {movies.map((movie) => (
                        <button key={movie.title} onClick = {() => singeMovieRoute(movie.url)} >{movie.title}</button>
                    ))}
                </div>
              
            </div>


        </div>
    )
}

export default AllMoviesDisplay;