import './Comments.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function Comments () {
    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_COMMENTS',
            payload: newComment
        })
    };

    return (
        <div>
            <div className='pageNumberContainer'>
                <h4 className='pageNumber'>4 of 4 pages</h4>
            </div>
            
            <br />
            <h3>How are you feeling today?</h3>
        <form className="commentFrom" onSubmit={handleSubmit}>
            <input type="text" placeholder="Comment" onChange={event => setNewFeelings(event.target.value)}/>
            <br /> <br />
        </form>
        <br />
       
        </div>
    )
}

export default Comments;