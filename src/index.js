import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
//Redux Imports
import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers
const feelings = (state = 0, action) => {
    if (action.type === 'SET_FEELINGS') {
        return action.payload
    }
    return state;
};

const understanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload
    }
    return state;
};

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload
    }
    return state;
};

const comments = (state = [], action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload
    }
    return state;
};


// Store
const reduxStore = createStore(
    combineReducers({
        feelings,
        understanding,
        support,
        comments
    }),
    applyMiddleware(logger)
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
