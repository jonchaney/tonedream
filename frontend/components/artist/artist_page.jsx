import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AlbumIndex from '../albums/album_index';
import ProfileInfo from './profile_info';

// not yet built
// import EditProfileForm from '../profile_form/edit_profile_form';
// import TrackIndex from '../track_index/track_index';

class ArtistPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "artist-profile">

        <div className="artist-profile-nav">
          <ul className="artist-profile-list">
            <li>digital</li>
            <li>vinyl</li>
            <li>tapes</li>
            <li>merch</li>
          </ul>
        </div>

        <div className="artist-profile-content">
            <ProfileInfo currentUser={this.props.currentUser}/>  
            <AlbumIndex fetchAlbums={this.props.fetchAlbums} loading={this.props.loading} albums={this.props.albums} /> 
        </div>

      </div>
    );
  }
}

export default ArtistPage;