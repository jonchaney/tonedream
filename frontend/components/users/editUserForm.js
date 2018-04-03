import React, { Component } from 'react';
import Input from '../presentationals/input.js'
import Icon from '../presentationals/icon.js'

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.state = {
      id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      imageFile: null,
      imageUrl: this.props.currentUser.image_url
    };
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.imageFile) {
      let formData = new FormData;
      formData.append("user[username]", this.state.username);
      formData.append("user[email]", this.state.email);
      formData.append("user[image]", this.state.imageFile);
      this.props.updateProfile(formData, this.state.id).then(() => this.props.history.push(`/users/${this.props.currentUser.id}`));
    } else {
      let user = {
        username: this.state.username,
        email: this.state.email
      }
      this.props.updateUser(user, this.state.id).then(() => this.props.history.push(`/users/${this.props.currentUser.id}`));
    }

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
        return(
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

  render() {
    return (
        <div className="edit-user-form">
          <form onSubmit={this.handleSubmit}>
              <img src={this.state.imageUrl}/>
              <label>
                <p>Change Profile Photo</p>
                <Input type="file"
                  className="artist-input-file"
                  onChange={this.updateFile}
                />
              </label>
              <Input type="text"
                autoFocus="autofocus"
                onFocus={(event) => this.onFocus(event)}
                className="text-input"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder={'username'}
              />
              <Input type="text"
                className="text-input"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="email"
              />
              <Input type="submit"
                className="button"
                value="Update" />
            {this.renderErrors()}
          </form>
        </div>
    );
  }
}

export default EditUserForm;