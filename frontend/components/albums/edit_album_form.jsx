import React from 'react';
import { Link } from 'react-router';

import Updating from '../edit_page/updating';

class EditAlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editAlbum = this.editAlbum.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.update = this.update.bind(this);
    this.handleTrackSubmit = this.handleTrackSubmit.bind(this);
    this.updateTrackFile = this.updateTrackFile.bind(this);

      this.state = {
        id: this.props.selectedAlbum.id,
        artist_id: this.props.selectedAlbum.artist_id,
        title: this.props.selectedAlbum.title,
        date: this.props.selectedAlbum.date,
        artist: this.props.selectedArtist.name,
        image: this.props.selectedAlbum.image_url,
        imageFile: null,
        audioFile: null,
        tracks: [],
        trackTitle: "",
        download: "",
        audio: null,
        trackForm: false
    };
  }

  componentDidUpdate(nextProps, prevState) {
    // clear form and reset album preview when artist changes
    if (nextProps.selectedArtist.name !== prevState.artist) {
      this.setState({
        title: "",
        trackTitle: "",
        date: "",
        image: null,
        audio: null,
        tracks: [],
        artist_id: null,
        download: "",
        artist: this.props.selectedArtist.name,
        trackForm: false,
        audioFile: null
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let album = {
      artist_id: this.state.artist_id,
      title: this.state.title,
      date: this.state.date,
      image: this.state.image
    };
    this.props.updateAlbum(this.state.artist_id, this.state.id, album)
    .then(() => this.props.addTracks(this.state.artist_id, this.state.id, this.state.tracks))
    .then(() => { 
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
      download: this.state.download,
      audioFile: this.state.audioFile
    };
    let tracks = this.state.tracks;
    tracks.push(track);
    this.setState({ tracks: tracks, trackTitle: "", download: "", audioFile: null, audio: null });
  }

  checkbox(event) {
    if (this.state.download) {
      this.setState({ download: false });
    } else {
      this.setState({ download: true });
    }
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

  showTrackForm() {
    if (this.state.trackForm) {
      this.setState({ trackForm: false });
    } else {
      this.setState({ trackForm: true });
    }
  }

  editAlbum() {
    if (this.state.trackForm) {
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
            <div className="track-download">
              <div onClick={() => this.showTrackForm()} className="item">
                <i className="fa fa-plus" aria-hidden="true"></i>
                <p>Add/Edit Tracks</p>
              </div>
            </div>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
   }
  }
  
  render() {
    return (
      <div className="artist-form-container">
        {this.editAlbum()}
        <div className="track-updating">
          <Updating album={this.state} artist={this.props.selectedArtist} />
        </div>
      </div>
    );
  }
}

export default EditAlbumForm;