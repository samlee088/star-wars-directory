import React from 'react';
import './HomePage.css';
import AllCharactersTrigger from './AllCharactersTrigger';
import AllMoviesTrigger from './AllMoviesTrigger';

function Homepage () {

    return(
        <div className='homePage'>
            <div className='loginCard'>
                <h1>Star Wars Directory</h1>
                    <AllCharactersTrigger/>
                    <AllMoviesTrigger/>
            </div>
        </div>
    )
}

export default Homepage;