import React, { Component } from 'react';

import Updating from '../edit_page/updating';
import TrackFormContainer from '../tracks/track_form_container';

class ArtistForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleTrackSubmit = this.handleTrackSubmit.bind(this);
    this.updateTrackFile = this.updateTrackFile.bind(this);
    this.state = {
      title: null,
      date: null,
      image: null,
      trackTitle: null,
      audio: null,
      tracks: [],
      artist_id: null,
      download: false,
      artist: this.props.selectedArtist.name,
      trackForm: false
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

  showTrackForm() {
    if(this.state.trackForm) {
      this.setState({ trackForm: false });
    } else {
      this.setState({ trackForm: true });
    }
  }

  updateTrackFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ audioFile: file, audio: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleTrackSubmit(e) {
    e.preventDefault();
    let track = {
      title: this.state.trackTitle,
      audio: this.state.audio,
    };
    let tracks = this.state.tracks;
    tracks.push(track);
    this.setState({tracks: tracks});
  }

  trackForm() {
    if(this.state.trackForm) {
      return (
        <form onSubmit={this.handleTrackSubmit} className="login-form-box">
          {/* {this.renderTrackErrors()}  */}
          <div className="track-form">
            <div className="track-form-item">
              <input type="text"
                className="track-input"
                placeholder="Title"
                onChange={this.update('trackTitle')}
              />
            </div>
            <div className="track-form-item">
              <label className="custom-upload-button">
                <p>upload audio</p>
                <input type="file"
                  className="track-input-file"
                  onChange={this.updateTrackFile}
                />
              </label>
            </div>
            <div className="track-form-item">
              <input type="submit"
                className="track-button"
                value="add" />
            </div>
          </div>
        </form>
      );
    } else {
      return null;
    }
  }

  render() {
    console.log(this.state.tracks);
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
            <div className="track-download">
              <div className="item">
                <input type="checkbox"
                  className="album-checkbox"
                  value="download"
                  checked={this.state.download}
                  onClick={() => this.checkbox()}
                />
                <p>enable download</p>
              </div>
              <div onClick={() => this.showTrackForm()}className="item">
                <i className="fa fa-plus" aria-hidden="true"></i>
                <p>add track</p>
              </div>
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
        <div className="track-updating">
          <Updating album={this.state} artist={this.props.selectedArtist}/>
          {this.trackForm()}
        </div>
      </div>
    );
  }
}

export default ArtistForm;