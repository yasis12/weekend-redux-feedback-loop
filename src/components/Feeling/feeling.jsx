import './feeling.css'
import React from 'react';
import { useDispatch} from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function feeling () {

    const history = useHistory();
    const dispatch = useDispatch();
    const [newFeelings, setNewFeelings] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_FEELINGS',
            payload: newFeelings
        })
        history.push('/2');
    };

    return (
        <div>
                <div className='pageNumberContainer'>
                    <h4 className='pageNumber'>1 of 4 pages</h4>
                </div>
                
                <br />
                <h3>How are you feeling today?</h3>
            <form className="feelingForm" onSubmit={handleSubmit}>
                <input type="number" min="0" max="5" placeholder="Rating 1-5" onChange={event => setNewFeelings(event.target.value)}/>
                <br /> <br />
                <button type='submit'>Next</button>
            </form>
            <br />
        </div>
    )
}

export default feeling;