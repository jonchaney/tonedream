import React from 'react';
import { Link } from 'react-router-dom';

import ArtistFormContainer from '../artists/artist_form_container';


class EditPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: "addArtist"
    };

  }

  componentDidMount() {

  }

  renderForm() {
    if (this.state.show === "addArtist") {
      return (
        <ArtistFormContainer />
      );
    }
  }

  render() {
    return (
      <div className="edit-page-container">
        <div className="edit-page-div">
          <ul className="edit-page-nav">
            <li onClick={() => this.setState({show: "addArtist"})}>Add Artist</li>
            <li onClick={() => this.setState({ show: "editArtist" })}>Edit Artist</li>
            <li onClick={() => this.setState({ show: "addAlbum" })}>Add Album</li>
            <li onClick={() => this.setState({ show: "editAlbum" })}>Edit Album</li>
          </ul>
        </div>
        <div className="edit-page-form">
          {this.renderForm()}
        </div>
      </div>
    );
  }
}

export default EditPage;
