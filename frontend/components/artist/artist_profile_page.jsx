import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LoadingIcon from '../albums/loading_icon';

import AlbumIndexContainer from '../albums/album_index_container';
import TrackIndexContainer from '../tracks/track_index_container';
import SelectedArtistInfo from './selected_artist_info_container';


// not yet built
// import TrackIndex from '../track_index/track_index';

class ArtistProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.match.params.user_id).then(() => {
      this.props.fetchAlbums(this.props.match.params.user_id);
    } );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.user_id !== nextProps.match.params.user_id) {
      this.props.fetchUser(nextProps.match.params.user_id).then(() => {
        this.props.fetchAlbums(nextProps.match.params.user_id);
      });
    }
  }

  render() {
    return (
      <div className="artist-profile">
        <div className="artist-profile-nav">
          <ul className="artist-profile-list">
            <li>digital</li>
            <li>vinyl</li>
            <li>tapes</li>
            <li>merch</li>
          </ul>
        </div>
        <div className="artist-profile-content">
          <Switch>
            <Route path="/:user_id/tracks" component={TrackIndexContainer} />
            <Route path="/:user_id" component={SelectedArtistInfo} />
          </Switch>
          <AlbumIndexContainer />
        </div>
      </div>
    );
  }
}

export default ArtistProfilePage;