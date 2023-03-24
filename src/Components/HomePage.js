import React, {useState} from 'react';
import './HomePage.css';
import AllCharactersTrigger from './AllCharactersTrigger';
import AllMoviesTrigger from './AllMoviesTrigger';
import {useNavigate} from 'react-router-dom';

function Homepage () {

    const [character, setCharacter] = useState('');

    const navigate=useNavigate();



    return(
        <div className='homePage'>
            <div className='loginCard'>
                <h1>Star Wars Directory</h1>
                {/* <h3>Search For a Character</h3> */}

                {/* <form className='loginForm'> */}
{/*                     
                        <input placeholder = "Star Wars Rules" onChange={(e) => setCharacter(e.target.value)}/>

                    <button onClick={() => navigate('/SingleCharacter', {character})}> Search for character </button> */}

                    <AllCharactersTrigger/>

                    <AllMoviesTrigger/>
                {/* </form> */}
            </div>
        </div>
    )
}

export default Homepage;