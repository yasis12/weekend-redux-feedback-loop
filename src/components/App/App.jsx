// misc
import React from 'react';
import axios from 'axios';
//Styling
import './App.css';
// Components
import Feeling from '../Feeling/feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments'
import Admin from '../Admin/Admin';
import Review from '../Review/Review';
import EndFeedback from '../EndFeedback/EndFeedback';
// React + redux imports
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
    //Router
import { HashRouter as Router, Route, Link} from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
        <Router> {/* Start Router */}
          <div className='routerDiv'>
            <body>
              <Route path="/" exact>
                <Feeling />
              </Route>
              <Route path="/2" exact>
                <Understanding />
              </Route>
              <Route path="/3" exact>
                <Support />
              </Route>
              <Route path="/4" exact>
                <Comments />
              </Route>
              <Route path="/Admin" exact>
                <Admin />
              </Route>
              <Route path="/5" exact>
                <Review />
              </Route>
              <Route path="/6" exact>
                <EndFeedback />
              </Route>
            </body>
          </div>
          </Router> {/* End Router */}
    </div>
  );
}

export default App;
