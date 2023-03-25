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
            setMovies(request.data.results);
            console.log(request.data);

            return request

        }
       
        queryMovies()



    },[])

    async function singeMovieRoute(movieUrl) {
        navigate('/SingleMovie', {state: {movieUrl: movieUrl}})
    }
    
    return(

        <div className='allMovies'>
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