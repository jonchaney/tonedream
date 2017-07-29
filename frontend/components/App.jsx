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
import ArtistPage from './artist/artist_page_container';
import SearchContainer from './search_bar/search_container';
import ArtistProfilePageContainer from './artist/artist_profile_page_container';
import Home from './greeting/home';

const App = () => (
  <div>
    <div className="head">
      <span>
        <Link to="/">
          <img src="http://res.cloudinary.com/tonedream/image/upload/v1500576450/settings_os0b9w.png" width="90" height="91" alt="tonedream"></img>
        </Link>
        <Link to="/">
        <h1 className="header">
          tonedream
        </h1></Link>
      </span> 
      <span>
        <p className="tagline">independent music network</p>
        <SearchContainer />
      </span>
    </div>
       
    <GreetingContainer />
    <Switch>
      <Route exact path="/" component={Home} /> 
      {/* <Route path="/artists/:id" component={ArtistProfilePageContainer} />  */}
      <LoginRoute path="/profile" component={ArtistPage} /> 
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/guest" component={SessionFormContainer} /> 
       <Route path="/:user_id" component={ArtistProfilePageContainer} />  
    </Switch>
  </div>
);

export default App;
