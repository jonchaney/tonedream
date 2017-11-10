import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LoadingIcon from '../albums/loading_icon';

import AlbumIndexContainer from '../albums/album_index_container';
import TrackIndexContainer from '../tracks/track_index_container';
import SelectedArtistInfoContainer from '../artist/selected_artist_info_container';
import AltHeaderContainer from '../headers/alt_header_container';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.clearAlbums();
    this.props.fetchAlbum(this.props.match.params.id).then(
    );
  }

  render() {
    if (!this.props.selectedArtist.artist) {
      return (<div>Loading...</div>);
    } else {
      return (
        <div className="artist-profile">
          <AltHeaderContainer />
          <div className="artist-profile-content">
            <SelectedArtistInfoContainer />
            <TrackIndexContainer />
          </div>
        </div>
      );
    }
  }
}

export default AlbumShow;