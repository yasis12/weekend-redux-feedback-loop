// misc
import React from 'react';
import axios from 'axios';
import './App.css';

// Components
import Feeling from '../Feeling/feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments'

// React + redux imports
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <body>
        <Feeling />
        <Understanding />
        <Support />
      </body>
    </div>
  );
}

export default App;
