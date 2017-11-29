import React from 'react';
import { Link } from 'react-router-dom';

import ArtistFormContainer from '../artists/artist_form_container';
import EditUserFormContainer from '../users/edit_user_form_container';
import EditArtistFormContainer from '../artists/edit_artist_form_container';

class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "Artists"
    };
  }

  componentDidMount() {
    this.props.fetchArtists();
  }

  dropdownArtists() {
    if (this.props.artists[0].id) {
      return (
        <select name="artists" onChange={(event) => this.change(event.target.value)}>
          <option value="artist">Add Artist</option>
          <optgroup label="Edit Artist">
            {this.props.artists.map((artist) =>
              <option key={artist.id} value={artist.id}>{artist.name}</option>
            )}
          </optgroup>
        </select>
      );
    } else {
      return;
    }
  }

  change(value) {
    if (value === "artist") {
      this.props.clearArtist();
    } else {
      this.props.fetchArtist(value);
    }
  }

  artistForm() {
    if(this.props.selectedArtist.id) {
      return (
        <EditArtistFormContainer />
      );
    } else {
      return (
        <ArtistFormContainer />
      );
    }
  }

  renderForm() {
    if (this.state.show === "Artists") {
      return (
        <div>
        {this.dropdownArtists()}
        {this.artistForm()}
        </div>
      );
    } else if (this.state.show === "Albums") {
      return;
    } else if (this.state.show === "Account") {
      return (
        <EditUserFormContainer />
      );
    }
  }

  renderListItem(itemType, currentItemShown) {
    let styles = {
      borderLeftWidth: 4,
      borderLeftColor: "#649922",
      borderBottomWidth: 1,
      borderBottomColor: '#eaeaea',
      borderTopWidth: 1,
      borderTopColor: '#eaeaea',
      paddingRight: 0,
      background: '#fff'
    };

    if (itemType === currentItemShown) {
      return (
        <li style={styles} onClick={() => this.listItemOnClick(itemType)}>{itemType}</li>
      );
    } else {
      return (
        <li onClick={() => this.listItemOnClick(itemType)}>{itemType}</li>
      );
    }
  }

  listItemOnClick(itemType) {
    this.props.clearArtist();
    this.setState({ show: itemType });
  }

  render() {
    let currentItemShown = this.state.show;
      return (
        <div className="edit-page-container">
          <div className="edit-page-div">
            <div>
              <div>
                <p>Settings</p>
              </div>
              <ul className="edit-page-nav">
                {this.renderListItem("Artists", currentItemShown)}
                {this.renderListItem("Albums", currentItemShown)}
                {this.renderListItem("Account", currentItemShown)}
              </ul>
            </div>
          </div>
          <div className="edit-page-form">
            {this.renderForm()}
          </div>
        </div>
    );
  }
}

export default EditPage;
