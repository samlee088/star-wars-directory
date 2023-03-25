import React from 'react';
import './BackButton.css';
import {useNavigate} from 'react-router-dom';

function BackButton({url}) {

    const navigate = useNavigate();

    async function changePage() {
        navigate('/AllCharacters', {state: {url: url}})
    }
 
    return(

        <div className='backButton' >
            <button onClick={changePage} url={url}>Back</button>
        </div>
    )
}

export default BackButton;

