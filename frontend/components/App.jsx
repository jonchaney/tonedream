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
import SearchContainer from './search_bar/search_container';
import ArtistShowContainer from './artists/artist_show_container';
import ArtistIndexContainer from './artists/artist_index_container';
import HomeContainer from './greeting/home_container';
import MainHeader from './headers/main_header';
import AudioPlayerContainer from './audio_player/audio_player_container';
import AltHeaderContainer from './headers/alt_header_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={MainHeader} /> 
      <Route path="/" component={AltHeaderContainer} /> 
    </Switch>
      <Route exact path="/" component={HomeContainer} /> 
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/guest" component={SessionFormContainer} /> 
      <Route path="/artists/:id" component={ArtistShowContainer} /> 
      <Route path="/albums/:id" component={AlbumShowContainer} /> 
      <Route path="/users/:user_id" component={ArtistIndexContainer} />  
    </Switch>
    <Route path="/" component={AudioPlayerContainer} /> 
  </div>
);

export default App;
