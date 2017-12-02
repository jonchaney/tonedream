import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer from '../search_bar/search_container';

class ArtistDropDownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  change(value) {
    this.props.clearAlbum();
    this.props.clearAlbumErrors();
    this.props.fetchArtist(value).then(() => this.props.fetchAlbums(value));
  }

  render() {
    return (
      <div className="artist-drop-down">
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          <select className="edit-page-dropdown" name="artists" onChange={(event) => this.change(event.target.value)}>
            <option value="artist">Select Artist</option>
              {this.props.artists.map((artist) =>
                <option key={artist.id} value={artist.id}>{artist.name}</option>
              )}
          </select>
      </div>
    );
  }
}

export default ArtistDropDownMenu;
