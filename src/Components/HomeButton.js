import React from 'react';
import {useNavigate} from 'react-router-dom';
import './HomeButton.css';

function HomeButton() {

    const navigate = useNavigate();

    return(

        <div className='homeButton'>
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}

export default HomeButton;