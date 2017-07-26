import React from 'react';
import { Link } from 'react-router';
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
    // refactor, the albums > allAlbums slice of state should be an object
    // of ojects with key set to id of each element
    // let album = {};
    // this.props.albums.forEach(function(item) {
    //   if (item.id === id) {
    //     album = item;
    //   }
    // });
    this.props.startLoadingSingleAlbum();
    this.props.fetchAlbum(id);
  }

  render() {
      return (
        this.props.indexLoading ?
          <LoadingIcon /> :
        <div className="artist-profile">
          <div className="album-index-container">
              {this.props.albums.map((album, idx) =>
            <ul key={idx}>
                <img value={album.id} onClick={() => this.handleClick(album.id)} src={album.image_url}/>
            </ul>
              )}
          </div>
        </div> 
        );
      }
}

export default AlbumIndex;