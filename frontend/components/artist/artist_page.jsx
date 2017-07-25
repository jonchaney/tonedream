import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AlbumIndexContainer from '../albums/album_index_container';
import ProfileInfo from './profile_info';

// not yet built
// import EditProfileForm from '../profile_form/edit_profile_form';
// import TrackIndex from '../track_index/track_index';

class ArtistPage extends React.Component {
  constructor(props) {
    super(props);
    this.profileInfo = this.profileInfo.bind(this);
  }

  profileInfo() {
    return (
      <div className="user-info">
        <img className="profile-pic" src={this.props.currentUser.image_url} />
        <ul>
          <li className="band">
            {this.props.currentUser.band}
          </li>
          <li className="location">
            {this.props.currentUser.location}
          </li>
          <li className="bio">
            {this.props.currentUser.bio}
          </li>
        </ul>
      </div>
    );
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
            {this.profileInfo()}     
            <AlbumIndexContainer  /> 
        </div>

      </div>
    );
  }
}

export default ArtistPage;