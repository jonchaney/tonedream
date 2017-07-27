import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AlbumIndexContainer from '../albums/album_index_container';
import TrackIndexContainer from '../tracks/track_index_container';
import LoadingIcon from '../albums/loading_icon';
import ProfileInfo from './profile_info';

// not yet built
// import TrackIndex from '../track_index/track_index';

class ArtistPage extends React.Component {
  constructor(props) {
    super(props);
    this.editForm = this.editForm.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.state = {
      id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      band: this.props.currentUser.band,
      bio: this.props.currentUser.bio,
      imageFile: null,
      imageUrl: this.props.currentUser.image_url,
      status: false
    };
  }



  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[email]", this.state.email);
    formData.append("user[band]", this.state.band);
    formData.append("user[bio]", this.state.bio);
    formData.append("user[image]", this.state.imageUrl);

    this.props.updateUserProfile(formData, this.state.id);
    this.props.history.push('/profile');
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

  editForm() {
    return (
      <div className="edit-form-container">
        <img className="profile-pic" src={this.state.imageUrl} />
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {/* {this.renderErrors()}  */}
          <div className="login-input-box">
            <label>
              <input type="text"
                autoFocus="autofocus"
                className="edit-input"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder={'username'}
              />
            </label>
            <label>
              <input type="text"
                className="edit-input"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="email"
              />
            </label>
            <label>
              <input type="text"
                className="edit-input"
                value={this.state.band}
                onChange={this.update('band')}
                placeholder={'artist'}
              />
            </label>
            <label>
              <input type="text"
                className="edit-input"
                value={this.state.bio}
                onChange={this.update('bio')}
                placeholder="bio"
              />
            </label>
            <label>
              <input type="file"
                className="edit-input"
                onChange={this.updateFile}
              />
            </label>
            <label>
              <input type="submit"
                className="submit-edit"
                value="submit" />
            </label>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div className="artist-profile">
        <div className="artist-profile-content">
          {this.editForm()}
        </div>
      </div>
    );
  }
}

export default ArtistPage;