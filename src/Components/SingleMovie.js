import React, { useEffect, useState }from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../axios';
import './SingleMovie.css';

function SingleMovie() {

    const location = useLocation();
    const [movie, setMovie] = useState([]);

    useEffect(()=> {

        async function queryMovieData() {
            const request = await axios.get(location.state.movieUrl)
            setMovie(request.data);
            console.log(request.data);

            return request;
        }
        queryMovieData();

    },[])


    return(

        <div className='singleMovie'>

            <div className='singleMovieCard'>
                <h1>Star Wars Movie</h1>
                <h2>Title: {movie.title}</h2>
                <h2>Episode: {movie.episode_id}</h2>
            </div>
            <div className='movieOpeningCrawl'>
                <div className='crawl'>
                    <p>{movie.opening_crawl}</p>
                </div>
            </div>

        </div>
    )
}

export default SingleMovie;
