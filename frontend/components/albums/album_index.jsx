import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Link, withRouter } from 'react-router';
import LoadingIcon from './loading_icon';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.location.pathname === '/profile'){
      this.props.fetchAlbums();
    }
  }

  handleClick(id) {
    this.props.startLoadingSingleAlbum();
    this.props.fetchAlbum(id).then(() => this.props.history.push(`/albums/${id}`));
  }

  render() {
      return (
        this.props.indexLoading ?
          <LoadingIcon /> :
        <div className="artist-profile">
          <h3>ALBUMS</h3>
          <ul className="album-index-container">
              {this.props.albums.map((album, idx) =>
                <li key={idx} onClick={() => this.handleClick(album.id)}>
                  <img className="album-index-photo" value={album.id} src={album.image_url}/>
                  <h1>{album.title}</h1>
                </li>
              )}
          </ul>
        </div> 
        );
      }
}

export default withRouter(AlbumIndex);