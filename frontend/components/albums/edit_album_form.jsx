import React from 'react';
import { Link } from 'react-router';

class EditAlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editAlbum = this.editAlbum.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.update = this.update.bind(this);
      this.state = {
        id: this.props.selectedAlbum.id,
        artist_id: this.props.selectedAlbum.artist_id,
        title: this.props.selectedAlbum.title,
        date: this.props.selectedAlbum.date,
        imageFile: null,
        image: this.props.selectedAlbum.image_url,
        tracks: this.props.tracks
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let album = {
      artist_id: this.state.artist_id,
      title: this.state.title,
      date: this.state.date,
      image: this.state.image
    };
    this.props.updateAlbum(this.state.artist_id, this.state.id, album).then(
      () => { 
        this.props.clearArtist();
        this.props.history.push(`/albums/${this.state.id}`);
      });
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, image: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  onFocus(e) {
    let val = e.target.value;
    e.target.value = '';
    e.target.value = val;
  }

  editAlbum() {
    return (
      <div className="artist-form-container">
        <form onSubmit={this.handleSubmit} className="artist-form-box">
          <div className="artist-login-form">
            <div className="item">
              <input type="text"
                autoFocus="autofocus"
                onFocus={(event) => this.onFocus(event)}
                className="artist-input"
                onChange={this.update('title')}
                value={this.state.title}
              />
            </div>
            <div className="item">
              <input type="text"
                className="artist-input"
                onChange={this.update('date')}
                value={this.state.date}
              />
            </div>
            <div className="item">
              <label className="custom-upload-button">
                <p>Upload Image</p>
                <input type="file"
                  className="artist-input-file"
                  onChange={this.updateFile}
                />
              </label>
            </div>
            <div className="item">
              <label>
                <input type="submit"
                  className="login-button"
                  value="Update Album" />
              </label>
            </div>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
  
  render() {
    return (
      <div className="album-info">
        {this.editAlbum()}
      </div>
    );
  }
}

export default EditAlbumForm;