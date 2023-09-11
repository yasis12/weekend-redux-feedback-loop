import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
//Redux Imports
import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers
const feedbackList = (state = [], action) => {
    if (action.type === 'SET_BOOK_LIST') {
        return action.payload
    }
    return state;
};

// Store
const reduxStore = createStore(
    combineReducers({
        feedbackList
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
