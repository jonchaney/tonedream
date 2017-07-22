import React from 'react';
import { Link } from 'react-router';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchAlbums();
  }

  render() {
    return (
      <main className="album-index-container">
        <ul>
          {this.props.albums.map((album, idx) => <li key={idx}>{album.title}</li>)}
        </ul>
      </main>
    );
  }
}

export default AlbumIndex;