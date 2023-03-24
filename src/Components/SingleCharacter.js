import React, {useState, useEffect} from 'react';
import './SingleCharacter.css';
import axios from '../axios';
import {useLocation} from 'react-router-dom';
import HomeButton from './HomeButton';
import BackButton from './BackButton';

function SingleCharacter() {

    const location = useLocation();
    const [character, setCharacter] = useState('')
    const [homeworld, setHomeWorld] = useState('')


    useEffect(() => {
        async function singleCharacter(characterUrl) {
            const request = await axios.get(characterUrl)
            setCharacter(request.data);
            return request;
        }

        singleCharacter(location.state.characterUrl)

    },[location.state.characterUrl])

    useEffect(() => {
        async function getCharacterHomeWorld() {
          if (character.homeworld) {
            const homeWorldRequest = await axios.get(character.homeworld);
            setHomeWorld(homeWorldRequest.data);
            return homeWorldRequest;
          }
        }
    
        getCharacterHomeWorld();
      }, [character]);
    
    // console.log('location', location)
    // console.log(character);
    // console.log(homeworld)

    return(
        <div className='singleCharacter'>

            <div className='singleCharacterCard'>
                <h2>{character.name}</h2>
                <h3>Gender: {character.gender}</h3>
                <h3>Height: {character.height}</h3>
                <h3>Hair Color: {character.hair_color}</h3>
                <h3>Eye Color: {character.eye_color}</h3>
                <h3>HomeWorld: {homeworld.name} </h3>
                <BackButton url={location.state.url}/>
                <HomeButton/>
            </div>

        </div>
    )
}

export default SingleCharacter;