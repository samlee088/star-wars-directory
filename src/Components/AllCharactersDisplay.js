import React, {useState, useEffect} from 'react';
import axios from '../axios';
import './AllCharactersDisplay.css'
import { useNavigate, useLocation } from 'react-router-dom';

function AllCharactersDisplay() {

    const [characters, setCharacters] = useState([]);
    const [requestData, setRequestData] = useState([]);
    const [requestUrl, setRequestUrl] = useState('https://swapi.dev/api/people')

    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect( () => {
        async function allCharactersQuery() {

            let request = '';
            if(location.state && location.state.url) {
                request = await axios.get(location.state.url);
            } else {
                request = await axios.get('people');
            }

            setCharacters(request.data.results);
            setRequestData(request.data);
            // console.log(request.data);
            return request;
        }

        allCharactersQuery();

    },[])

    async function getAnotherPage(nextPageUrl) {
            const request = await axios.get(nextPageUrl);
            setRequestUrl(nextPageUrl)
            setCharacters(request.data.results);
            setRequestData(request.data);
            return request;
    }

    async function singleCharacterRoute(characterUrl) {
        navigate('/SingleCharacter', { state: {characterUrl: characterUrl, url: requestUrl }})
    }

    return(
        <div className= 'allCharacters'>
            <div className='allCharactersCard'>
                <h1>All Star Wars Characters</h1>
                <div className='allCharactersList'>
                {characters.map((character) => (
                       <button key={character.name} onClick={() => singleCharacterRoute(character.url)}>{character.name}</button>

                    ))}
                {requestData.previous && <button key={requestData.previous} onClick={() => getAnotherPage(requestData.previous)}>Previous Page</button>}
                {requestData.next && <button key={requestData.next} onClick={() => getAnotherPage(requestData.next)}>Next Page</button>}
                </div>
            </div>
        </div>
    )

}

export default AllCharactersDisplay;