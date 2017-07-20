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
      <Link to="/">
        <h1>
        <img src="http://res.cloudinary.com/tonedream/image/upload/v1500576450/settings_os0b9w.png" width="65" height="67" alt="tonedream"></img>
          tonedream
       </h1>
      </Link>
    <GreetingContainer />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/guest" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
