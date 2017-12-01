import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer from '../search_bar/search_container';

class AlbumDropDownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  change(id) {
    this.props.fetchAlbum(id);
  }

  render() {
    return (
      <div className="artist-drop-down">
        <i className="fa fa-angle-down" aria-hidden="true"></i>
        <select className="edit-page-dropdown" name="albums" onChange={(event) => this.change(event.target.value)}>
          <option value="artist">Add Album</option>
          <optgroup label="Edit Album">
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
