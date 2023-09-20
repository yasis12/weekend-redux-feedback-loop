import './Support.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Support () {

    const history = useHistory();
    const dispatch = useDispatch();
    const [newSupport, setNewSupport] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_SUPPORT',
            payload: newSupport
        })
        history.push('/4');
    };

    return (
        <div>
            <div className='pageNumberContainer'>
                <h4 className='pageNumber'>3 of 4 pages</h4>
            </div>
            
            <br />
            <h3>How are well are you being supported?</h3>
        <form className="supportForm" onSubmit={handleSubmit}>
            <input type="number" min="0" max="5" placeholder="Rating 1-5" onChange={event => setNewSupport(event.target.value)}/>
            <br /> <br />
            <button type='submit'>Next</button>
        </form>
        <br />
       
        </div>
    )
}

export default Support;