import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Link, withRouter } from 'react-router';
import Icon from '../presentationals/icon.js';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.history.push(`/albums/${id}`);
  }

  render() {
    return (
      <div className="artist-profile">
        <ul className="album-index-container">
            {this.props.albums.map((album, idx) =>
              <li key={album.id} onClick={() => this.handleClick(album.id)}>
              <section>
                <article>
                  <img className="album-index-photo" value={album.id} src={album.image_url}/>
                </article>
                <article>
                  <p>{album.title}</p>
                  <p>{album.date}</p>
                </article>
              </section>
              <section>
                <Icon type="fal fa-chevron-right" />
              </section>
              </li>
            )}
        </ul>
      </div> 
      );
    }
}

export default withRouter(AlbumIndex);