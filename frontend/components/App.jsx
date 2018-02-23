import React from 'react';
import { Route,
         Switch,
         Link,
         Redirect } from 'react-router-dom';
import { withRoute } from 'react-router';
import { AuthRoute, LoginRoute } from '../util/route_util';
import { login } from '../actions/session_actions';

// sessions
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
// artists
import FeaturedArtistContainer from './artists/featured_artist_container';
import ArtistShowContainer from './artists/artist_show_container';
import ArtistIndexContainer from './artists/artist_index_container';
import ArtistFormContainer from './artists/artist_form_container';
import EditPageContainer from './edit_page/edit_page_container';
// users
import EditUserFormContainer from './users/edit_user_form_container';
// albums
import AlbumIndexContainer from './albums/album_index_container';
import AlbumShowContainer from './albums/album_show_container';
// headers
import Header from './presentationals/headers/header.jsx';
import TabsFooter from './presentationals/footers/tabsFooter.js';


const App = () => (
  <div>
      <Route exact path="/" component={Header} /> 
      <Route exact path="/" component={TabsFooter} /> 
  </div>
);

export default App;
