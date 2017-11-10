import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LoadingIcon from '../albums/loading_icon';

import AlbumIndexContainer from '../albums/album_index_container';
import TrackIndexContainer from '../tracks/track_index_container';
import SelectedArtistInfoContainer from './selected_artist_info_container';
import AltHeaderContainer from '../headers/alt_header_container';

class ArtistProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.clearAlbums();
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
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.clearAlbums();
    }
  }

  render() {
    return (
      <div className="artist-profile">
      <AltHeaderContainer />
        <div className="artist-profile-content">
          <SelectedArtistInfoContainer />
          <Switch>
            <Route path="/:user_id" component={AlbumIndexContainer} />   
          </Switch>
        </div>
      </div>
    );
  }
}

export default ArtistProfilePage;