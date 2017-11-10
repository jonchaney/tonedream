import React from 'react';
import { Route,
         Switch,
         Link,
         Redirect } from 'react-router-dom';
import { withRoute } from 'react-router';
import { AuthRoute, LoginRoute } from '../util/route_util';
import { login } from '../actions/session_actions';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import AlbumIndexContainer from './albums/album_index_container';
import AlbumShowContainer from './albums/album_show_container';
import ArtistPage from './artist/artist_page_container';
import SearchContainer from './search_bar/search_container';
import ArtistProfilePageContainer from './artist/artist_profile_page_container';
import HomeContainer from './greeting/home_container';
import MainHeader from './headers/main_header';

const App = () => (
  <div>
    <Route exact path="/" component={MainHeader} /> 
    <Route exact path="/" component={HomeContainer} /> 
    <Switch>
      <LoginRoute path="/profile" component={ArtistPage} /> 
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/guest" component={SessionFormContainer} /> 
      <Route path="/albums/:id" component={AlbumShowContainer} /> 
      <Route path="/:user_id" component={ArtistProfilePageContainer} />  
    </Switch>
  </div>
);

export default App;
