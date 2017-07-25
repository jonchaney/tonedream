import React from 'react';
import { Link } from 'react-router';
import LoadingIcon from './loading_icon';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAlbums();
  }

  render() {
    console.log(this.props);
      return (
        this.props.loading.indexLoading ?
          <LoadingIcon /> :
        <div className="artist-profile">
          <div className="album-index-container">
              {this.props.albums.map((album, idx) =>
            <ul key={idx}>
                <img src={album.image_url}/>
            </ul>
              )}
          </div>
        </div> );
      }
}

export default AlbumIndex;