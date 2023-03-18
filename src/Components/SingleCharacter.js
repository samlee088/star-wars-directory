import React, {useState, useEffect} from 'react';
import './SingleCharacter.css';
import axios from '../axios';
import {useLocation} from 'react-router-dom';
import HomeButton from './HomeButton';

function SingleCharacter() {

    const location = useLocation();
    const [character, setCharacter] = useState('')

    useEffect(() => {
        async function singleCharacter(characterUrl) {
            const request = await axios.get(characterUrl)
            console.log(request.data);
            setCharacter(request.data);

            return request;
        }

        singleCharacter(location.state.characterUrl)

    },[location.state.characterUrl])
    
    console.log('location', location)

    return(
        <div className='singleCharacter'>

            <div className='singleCharacterCard'>
                <h2>{character.name}</h2>
                <h3>Gender: {character.gender}</h3>
                <h3>Height: {character.height}</h3>
                <h3>Hair Color: {character.hair_color}</h3>

                <HomeButton/>
            </div>

        </div>
    )
}

export default SingleCharacter;