import React from 'react';
import { Route,
         Switch,
         Link,
         Redirect } from 'react-router-dom';
import { withRoute } from 'react-router';
import { AuthRoute, LoginRoute } from '../util/route_util';
import { login } from '../actions/sessionActions';

import Header from './presentationals/headers/header.jsx';
import Tabs from './presentationals/tabs.js';
import FeaturedArtistsContainer from './featured/featuredArtistsContainer.js';
import EditUserFormContainer from './users/editUserFormContainer.js';
import ArtistShowContainer from './artists/artistShowContainer.js';


const App = () => (
  <div>
      <Route path="/" component={Header} /> 
      <Route path="/" component={Tabs} /> 
      <Route exact path="/" component={FeaturedArtistsContainer} /> 
      <Route exact path="/account" component={EditUserFormContainer}/>
      <Route exact path="/artists/:id" component={ArtistShowContainer}/>
  </div>
);

export default App;
