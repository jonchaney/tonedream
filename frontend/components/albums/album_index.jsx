import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Link, withRouter } from 'react-router';
import LoadingIcon from './loading_icon';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchAlbums();
  }

  handleClick(id) {
    console.log(this.props.match.params.user_id);
    this.props.startLoadingSingleAlbum();
    if (this.props.match.params.user_id) {
      this.props.fetchAlbum(id).then(() => this.props.history.push('/:user_id/tracks'));
    } else {
      this.props.fetchAlbum(id).then(() => this.props.history.push('/profile/album'));
    }
  }

  render() {
      return (
        this.props.indexLoading ?
          <LoadingIcon /> :
        <div className="artist-profile">
          <ul className="album-index-container">
              {this.props.albums.map((album, idx) =>
            <li key={idx}>
                  <img className="album-index-photo" value={album.id} onClick={() => this.handleClick(album.id)} src={album.image_url}/>
            </li>
              )}
              
          </ul>
        </div> 
        );
      }
}

export default withRouter(AlbumIndex);