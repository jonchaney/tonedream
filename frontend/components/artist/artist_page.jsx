import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import AlbumIndexContainer from '../albums/album_index_container';
import TrackIndexContainer from '../tracks/track_index_container';
import LoadingIcon from '../albums/loading_icon';
import ProfileInfoContainer from './profile_info_container';
import EditProfileFormContainer from './edit_profile_form_container';
import EditAlbumContainer from '../albums/edit_album_container';
import EditTrackContainer from '../tracks/edit_track_container';
import AddTrackContainer from '../tracks/add_track_container';

// not yet built
// import TrackIndex from '../track_index/track_index';

class ArtistPage extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className = "artist-profile">
        <div className="artist-profile-nav">
          {/* <ul className="artist-profile-list">
            <li>digital</li>
            <li>vinyl</li>
            <li>tapes</li>
            <li>merch</li>
          </ul> */}
        </div>
          <div className="artist-profile-content">
             <Switch>
              <Route path="/profile/album/update/track/:id" component={EditTrackContainer}/>    
              <Route path="/profile/album/upload/track" component={AddTrackContainer}/>    
              <Route path="/profile/album/update" component={EditAlbumContainer}/>  
              <Route path="/profile/album" component={TrackIndexContainer}/>  
              <Route path="/profile/edit" component={EditProfileFormContainer}/>  
              <Route exact path="/profile" component={ProfileInfoContainer}/>  
            </Switch> 
            <AlbumIndexContainer />
          </div>
      </div>
    );
  }
}

export default ArtistPage;