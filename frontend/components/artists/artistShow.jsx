import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Icon from '../presentationals/icon.js';

import AlbumIndex from '../albums/albumIndex.jsx';
import TrackIndexContainer from '../tracks/track_index_container';
import ArtistInfo from './artistInfo.jsx';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.clearAlbums();
    this.props.fetchArtist(this.props.match.params.id).then(() => {
      this.props.fetchAlbums(this.props.match.params.id);
    } );
  }

  render() {
      return (
        this.props.artistLoading ?
          <div>
            <Icon type="fal fa-spinner"/>
          </div> :
          <div className="artist-profile">
              <ArtistInfo artist={this.props.artist}/>
              <AlbumIndex albums={this.props.albums} />
          </div>
      );
  }
}

export default ArtistShow;