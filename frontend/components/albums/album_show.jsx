import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import AlbumIndexContainer from '../albums/album_index_container';
import TrackIndexContainer from '../tracks/track_index_container';
import SelectedArtistInfoContainer from '../artist/selected_artist_info_container';
import AltHeaderContainer from '../headers/alt_header_container';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAlbum(this.props.match.params.id).then(
    );
  }

  renderContent() {
    if (!this.props.selectedArtist.band) {
      return (
        <div className="artist-profile-content">
          <div>Loading...</div>
        </div>
        )
      ;
    } else {
      return (
        <div className="artist-profile-content">
          <SelectedArtistInfoContainer />
          <TrackIndexContainer />
        </div>
      );
    }
  }

  render() {
      return (
        <div className="artist-profile">
          <AltHeaderContainer />
          {this.renderContent()}
        </div>
      );
  }
}

export default AlbumShow;