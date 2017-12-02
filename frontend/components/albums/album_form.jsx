import React, { Component } from 'react';

import Updating from '../edit_page/updating';

class ArtistForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.state = {
      title: null,
      date: null,
      image: null,
      tracks: null,
      artist_id: null,
      download: false,
      artist: this.props.selectedArtist.name
    };
  }

  componentDidUpdate(nextProps, prevState) {
    // clear form and reset album preview when artist changes
    if(nextProps.selectedArtist.name !== prevState.artist) {
      this.resetForm.reset();
      this.setState({
        title: null,
        date: null,
        image: null,
        tracks: null,
        artist_id: null,
        download: null,
        artist: this.props.selectedArtist.name
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let album = {
      title: this.state.title,
      date: this.state.date,
      image: this.state.image,
      downloac: this.state.download,
      artist_id: this.props.selectedArtist.id
    };
    this.props.createAlbum(album).then(() => this.props.history.push(`/users/${this.props.currentUser.id}`));
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

  checkbox(event) {
    if (this.state.download) {
      this.setState({download: false});
    } else {
      this.setState({ download: true });
    }
  }

  render() {
    return (
      <div className="artist-form-container">
        <form ref={(el) => this.resetForm = el} onSubmit={this.handleSubmit} className="artist-form-box">
          <div className="artist-login-form">
            <div className="item">
              <input type="text"
                autoFocus="autofocus"
                className="artist-input"
                onChange={this.update('title')}
                placeholder={'Album Name'}
              />
            </div>
            <div className="item">
              <input type="text"
                className="artist-input"
                onChange={this.update('date')}
                placeholder={'Release Date (MM/DD/YY)'}
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
              <input type="checkbox"
                className="album-checkbox"
                value="download"
                checked={this.state.download}
                onClick={() => this.checkbox()}
              />
              <p>enable download</p>
            </div>
            <div className="item">
              <label>
                <input type="submit"
                  className="login-button"
                  value="Add Album" />
              </label>
            </div>
            {this.renderErrors()}
          </div>
        </form>
        <Updating album={this.state} artist={this.props.selectedArtist}/>
      </div>
    );
  }
}

export default ArtistForm;