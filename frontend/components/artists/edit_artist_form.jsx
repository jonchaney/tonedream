import React, { Component } from 'react';

class EditArtistForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.state = {
      id: this.props.artist.id,
      name: this.props.artist.name,
      bio: this.props.artist.bio,
      location: this.props.artist.location,
      imageFile: null,
      imageUrl: this.props.artist.image_url,
      updating: false
    };
  }

  componentWillMount() {
    this.props.clearArtistErrors();
  }

  componentWillUnmount() {
    this.props.clearArtist();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.id !== nextProps.artist.id) {
      this.setState({
        id: nextProps.artist.id,
        name: nextProps.artist.name,
        bio: nextProps.artist.bio,
        location: nextProps.artist.location,
        imageFile: null,
        imageUrl: nextProps.artist.image_url
      });
    }
  }

  componentDidUpdate() {
    if (this.state.updating) {
      let artist = {
        name: this.state.name,
        location: this.state.location,
        bio: this.state.bio,
        image: this.state.imageUrl,
        id: this.state.id
      };
      this.props.updateArtist(artist).then(() => this.props.history.push(`/artists/${this.props.artist.id}`));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ updating: true });
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
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

  artistButton() {
    if (this.state.updating) {
      return (
        <label>
          <input type="submit"
            disabled={this.state.updating}
            className="login-button"
            style={{ opacity: .6 }} 
            value="Updating Artist..." />
        </label>
      );
    } else {
      return (
        <label>
          <input type="submit"
            disabled={this.state.updating}
            className="login-button"
            value="Update Artist"
            />
        </label>
      );
    }
  }

  render() {
    return (
      <div className="artist-form-container">
        <form onSubmit={this.handleSubmit} className="artist-form-box">
          <div className="artist-login-form">
            <div className="item">
              <input type="text"
                autoFocus
                onFocus={(event) => this.onFocus(event)}
                className="artist-input"
                value={this.state.name} 
                onChange={this.update('name')}
                placeholder={'name'}
              />
            </div>
            <div className="item">
              <input type="text"
                className="artist-input"
                value={this.state.location}
                onChange={this.update('location')}
                placeholder="location"
              />
            </div>
            <div className="item">
              <textarea type="text"
                className="artist-input-textarea"
                value={this.state.bio}
                onChange={this.update('bio')}
                placeholder="bio"
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
              {this.artistButton()}
            </div>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default EditArtistForm;