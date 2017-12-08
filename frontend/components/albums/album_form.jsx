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
      title: "",
      trackTitle: "",
      date: "",
      image: null,
      audio: null,
      tracks: [],
      artist_id: null,
      download: "",
      artist: this.props.selectedArtist.name,
      trackForm: false
    };
  }

  componentDidUpdate(nextProps, prevState) {
    // clear form and reset album preview when artist changes
    if(nextProps.selectedArtist.name !== prevState.artist) {
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
      download: this.state.download,
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
      download: this.state.download
    };
    let tracks = this.state.tracks;
    tracks.push(track);
    this.setState({tracks: tracks, trackTitle: "", download: ""});
  }

  form() {
    if(this.state.trackForm) {
      return (
          <form onSubmit={this.handleTrackSubmit} className="artist-form-box">
            <div className="artist-login-form">
            {/* {this.renderTrackErrors()}  */}
              <div className="item">
                <input type="text"
                  className="track-input"
                  placeholder="Title"
                  value={this.state.trackTitle}
                  onChange={this.update('trackTitle')}
                />
              </div>
              <div className="item">
                <label className="custom-upload-button">
                  <p>Upload Audio</p>
                  <input type="file"
                    className="artist-input-file"
                    onChange={this.updateTrackFile}
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
                <div onClick={() => this.showTrackForm()} className="item">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
                  <p>Edit Album</p>
                </div>
              </div>
              <div className="item">
                <input type="submit"
                  className="login-button"
                  value="add track" />
              </div>
            </div>
          </form>
      );
    } else {
      return (
        <form ref={(el) => this.resetForm = el} onSubmit={this.handleSubmit} className="artist-form-box">
          <div className="artist-login-form">
            <div className="item">
              <input type="text"
                autoFocus="autofocus"
                className="artist-input"
                value={this.state.title}
                onChange={this.update('title')}
                placeholder='Album Name'
              />
            </div>
            <div className="item">
              <input type="text"
                className="artist-input"
                value={this.state.date}
                onChange={this.update('date')}
                placeholder='Release Date (MM/DD/YY)'
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
                {/* <input type="checkbox"
                  className="album-checkbox"
                  value="download"
                  checked={this.state.download}
                  onClick={() => this.checkbox()}
                />
                <p>enable download</p> */}
              </div>
              <div onClick={() => this.showTrackForm()} className="item">
                <i className="fa fa-plus" aria-hidden="true"></i>
                <p>Add Track</p>
              </div>
            </div>
            <div className="item">
              <label>
                <input type="submit"
                  className="login-button"
                  value="Submit Album" />
              </label>
            </div>
            {this.renderErrors()}
          </div>
        </form>
      );
    }
  }

  render() {
    console.log(this.state.tracks);
    console.log(this.state);
    return (
      <div className="artist-form-container">
        {this.form()}
        <div className="track-updating">
          <Updating album={this.state} artist={this.props.selectedArtist}/>
        </div>
      </div>
    );
  }
}

export default ArtistForm;