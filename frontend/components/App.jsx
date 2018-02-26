import React from 'react';
import { Route,
         Switch,
         Link,
         Redirect } from 'react-router-dom';
import { withRoute } from 'react-router';
import { AuthRoute, LoginRoute } from '../util/route_util';
import { login } from '../actions/session_actions';

import Header from './presentationals/headers/header.jsx';
import TabsFooter from './presentationals/tabs.js';
import FeaturedArtistsContainer from './featured/featuredArtistsContainer.js';
import SearchContainer from './search/searchContainer.js';


const App = () => (
  <div>
      <Route path="/" component={Header} /> 
      <Route path="/" component={TabsFooter} /> 
      <Route exact path="/" component={FeaturedArtistsContainer} /> 
      <Route path="/search" component={SearchContainer}/> 
  </div>
);

export default App;
