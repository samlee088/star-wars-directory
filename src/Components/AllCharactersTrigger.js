import React, {useState} from 'react';
import './AllCharactersTrigger.css';
import { useNavigate } from 'react-router-dom';

function AllCharactersTrigger() {
    
    

    const navigate = useNavigate();


   


    return(

        <div className='allCharactersTrigger'>
            <button onClick={() => navigate('/AllCharacters')}> View All Characters</button>
        </div>
    )
}

export default AllCharactersTrigger;