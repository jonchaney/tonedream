import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer from '../search_bar/search_container';

class AlbumDropDownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  change(value) {
    if (value !== 'artist') {
      this.props.fetchAlbum(value);
    } else {
      this.props.clearAlbum();
    }
  }

  render() {
    let label;
    if (this.props.albums.length === 0) {
      label = "No Albums Have Been Added Yet";
    } else {
      label = "Edit Album";
    }
    return (
      <div className="artist-drop-down">
        <i className="fa fa-angle-down" aria-hidden="true"></i>
        <select className="edit-page-dropdown" name="albums" onChange={(event) => this.change(event.target.value)}>
          <option value="artist">Add Album</option>
          <optgroup label={label}>
            {this.props.albums.map((album) =>
              <option key={album.id} value={album.id}>{album.title}</option>
            )}
          </optgroup>
        </select>
      </div>
    );
  }
}

export default AlbumDropDownMenu;
