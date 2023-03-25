import React from 'react';
import './AllMoviesTrigger.css';
import {useNavigate} from 'react-router-dom';

function AllMoviesTrigger() {

    const navigate = useNavigate();
    
    return (
        <div className='allMovies'>
            <button onClick ={() => navigate('/AllMovies')}>View All Movies</button>
        </div>
    )
}

export default AllMoviesTrigger