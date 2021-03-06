import React, { Component } from 'react';

class ArtistForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.state = {
      name: null,
      location: null,
      bio: null,
      image: null,
      updating: false
    };
  }

  componentWillMount() {
    this.props.clearArtistErrors();
  }

  componentDidUpdate(){
    if (this.state.updating) {
      let artist = {
        name: this.state.name,
        location: this.state.location,
        image: this.state.image,
        bio: this.state.bio
      };
      this.props.createArtist(artist).then(() => this.props.history.push(`/users/${this.props.currentUser.id}`));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({updating: true});
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

  artistButton() {
    if (this.state.updating) {
      return (
        <label>
          <input type="submit"
            disabled={this.state.updating}
            className="login-button"
            style={{ opacity: .6 }} 
            value="Adding Artist..." />
        </label>
      );
    } else {
      return (
      <label>
        <input type="submit"
          disabled={this.state.updating}
          className="login-button"
          value="Add Artist" />
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
                    autoFocus="autofocus"
                    className="artist-input"
                    onChange={this.update('name')}
                    placeholder={'Name'}
                  />
              </div>
              <div className="item">
                  <input type="text"
                    className="artist-input"
                    onChange={this.update('location')}
                    placeholder={'Location'}
                  />
              </div>
              <div className="item">
                  <textarea type="text"
                    className="artist-input-textarea"
                    onChange={this.update('bio')}
                    placeholder={'Bio'}
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

export default ArtistForm;