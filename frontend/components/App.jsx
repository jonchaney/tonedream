import React from 'react';
import { Route,
         Switch,
         Link,
         Redirect } from 'react-router-dom';
import { withRoute } from 'react-router';
import { AuthRoute, LoginRoute } from '../util/route_util';
import { login } from '../actions/session_actions';

// headers
import Header from './presentationals/headers/header.jsx';
import TabsFooter from './presentationals/tabs.js';
import FeaturedArtistsContainer from './featured/featuredArtistsContainer.js';


const App = () => (
  <div>
      <Route exact path="/" component={Header} /> 
      <Route exact path="/" component={FeaturedArtistsContainer} /> 
      <Route exact path="/" component={TabsFooter} /> 
  </div>
);

export default App;
