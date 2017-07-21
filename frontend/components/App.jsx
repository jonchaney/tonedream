 import React from 'react';
import { Route,
         Switch,
         Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { login } from '../actions/session_actions';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
const App = () => (
  <div>

        <div className="head">
          <span>
            <Link to="/">
              <img src="http://res.cloudinary.com/tonedream/image/upload/v1500576450/settings_os0b9w.png" width="65" height="67" alt="tonedream"></img>
            </Link>
            <h1 className="header">
              tonedream
            </h1>
          </span> 
          <span> 
           <p className="tagline">independent music network</p>
          </span>
       </div>
       
    <GreetingContainer />
    <Switch>
      <AuthRoute path="/guest" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
