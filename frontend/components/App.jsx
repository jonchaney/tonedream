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
    <h1>
      <Link to="/">
        tonedream
      </Link>
    </h1>
    <GreetingContainer />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/guest" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
