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
import SearchContainer from './search/searchContainer.js';
import DropdownMenuContainer from './dropdownMenu/dropdownMenuContainer.js';
import editUserFormContainer from './users/editUserFormContainer.js';


const App = () => (
  <div>
      <Route path="/" component={Header} /> 
      <Route path="/" component={Tabs} /> 
      <Route exact path="/account" component={editUserFormContainer}/>
      <Route exact path="/" component={FeaturedArtistsContainer} /> 
      {/* <Route path="/search" component={SearchContainer}/> */}
      {/* <Route path="/info" component={DropdownMenuContainer}/> */}
  </div>
);

export default App;
