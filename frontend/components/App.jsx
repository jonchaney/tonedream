import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

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
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </Switch>

  </div>
);

export default App;
