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
// audio player
import AudioPlayerContainer from './audio_player/audio_player_container';
// headers
import AltHeaderContainer from './headers/alt_header_container';
import MainHeader from './headers/main_header';
// search
import SearchContainer from './search_bar/search_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={MainHeader} /> 
      <Route path="/" component={AltHeaderContainer} /> 
    </Switch>
      <Route exact path="/" component={FeaturedArtistContainer} /> 
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/guest" component={SessionFormContainer} /> 
      <LoginRoute path="/settings" component={EditPageContainer} /> 
      <Route path="/artists/:id" component={ArtistShowContainer} /> 
      <Route path="/albums/:id" component={AlbumShowContainer} /> 
      <LoginRoute path="/users/:user_id" component={ArtistIndexContainer} />  
    </Switch>
    <Route path="/" component={AudioPlayerContainer} /> 
  </div>
);

export default App;
