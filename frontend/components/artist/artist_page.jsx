import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import AlbumIndex from '../albums/album_index';
import ProfileInfo from './profile_info';
import LoadingIcon from './loading_profile';

// not yet built
// import EditProfileForm from '../profile_form/edit_profile_form';
// import TrackIndex from '../track_index/track_index';

class ArtistPage extends React.Component {
  constructor(props) {
    super(props);
    this.userInfo = this.userInfo.bind(this);
  }


  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchUser(nextProps.match.params.id);
    }
  }

  userInfo() {
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
          <li>
            {/* only let user see this this if they are logged in as artist */}
            <Link to="/edit">edit</Link>
          </li>
        </ul>
      </div>
    );
  }
  
  render() {
    return (
      this.props.loading ?
        <LoadingIcon /> :
      <div className = "artist-profile">
        <div className="artist-profile-nav">
          <ul className="artist-profile-list">
            <li> <Link to='/artist'>digital</Link></li>
            <li>vinyl</li>
            <li>tapes</li>
            <li>merch</li>
            <li>events</li>
          </ul>
        </div>

        <div className="artist-profile-content">
             {this.userInfo()} 
             <AlbumIndex  fetchAlbums={this.props.fetchAlbums} loading={this.props.loading} /> 
            {/* coditionally render edit link that will route to /edit
                and then insoide of app.js add ./edit route that renders the editProfileFormContainer  */}
            {/* <Route path="/edit" component={(props) => <EditProfileForm {...props} currentUser={this.props.currentUser} updateUser={this.props.updateUser} />} /> )} />   */}
        </div>
    </div>
    );
  }
}

export default ArtistPage;

          