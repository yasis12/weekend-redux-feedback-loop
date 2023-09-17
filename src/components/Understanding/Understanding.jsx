import './Understanding.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Understanding () {
    const dispatch = useDispatch();
    const [newUnderstanding, setNewUnderstanding] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: newUnderstanding
        })
    };

    return (
        <div>
            <div className='pageNumberContainer'>
                <h4 className='pageNumber'>2 of 4 pages</h4>
            </div>
            
            <br />
            <h3>How are well are you understanding the content?</h3>
        <form className="understandingForm" onSubmit={handleSubmit}>
            <input type="number" min="0" max="5" placeholder="Rating 1-5" onChange={event => setNewUnderstanding(event.target.value)}/>
            <br /> <br />
            <Link to="/3"> NEXT </Link>
        </form>
        <br />
       
        </div>
    )
}

export default Understanding;