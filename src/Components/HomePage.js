import React from 'react';
import './HomePage.css';
import AllCharactersTrigger from './AllCharactersTrigger';

function Homepage () {

    return(
        <div className='homePage'>
            <div className='loginCard'>
                <h1>Star Wars</h1>
                <h3>Search For a Character</h3>

                <form className='loginForm'>
                    
                        <input placeholder = "Star Wars Rules"/>

                    <button> Search for character </button>

                    <AllCharactersTrigger/>
                </form>
            </div>
        </div>
    )
}

export default Homepage;