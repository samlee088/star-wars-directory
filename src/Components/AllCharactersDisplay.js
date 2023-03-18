import React, {useState, useEffect} from 'react';
import axios from '../axios';
import './AllCharactersDisplay.css'

function AllCharactersDisplay() {

    const [characters, setCharacters] = useState([]);

    useEffect( () => {
        async function allCharactersQuery() {
            const request = await axios.get('people');
            setCharacters(request.data.results);
            console.log(request.data.results);
            return request;
        }

        allCharactersQuery();

    },[])

    console.log(characters);
    
    return(
        <div className= 'allCharacters'>
            <div className='allCharactersCard'>
                <h1>All Star Wars Characters</h1>
                <div className='allCharactersList'>
                {characters.map((character) => (
                        <button>{character.name}</button>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default AllCharactersDisplay;