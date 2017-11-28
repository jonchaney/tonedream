import React, { Component } from 'react';

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
      imageUrl: this.props.currentUser.image_url,
      status: false
    };
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      email: this.state.email,
      image: this.state.imageUrl,
      id: this.state.id
    };
    this.props.updateUser(user).then(() => this.props.history.push(`/users/${this.props.currentUser.id}`));
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
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            <li>Settings</li>
            <div className="top-divider"></div>
          {this.renderErrors() }
            <div className="login-input">
              <div className="item">
                  <div className="login-label">
                    <label>
                      Username:
                    </label>
                  </div>
                    <div>
                      <input type="text"
                        autoFocus="autofocus"
                        className="login-input"
                        value={this.state.username}
                        onChange={this.update('username')}
                        placeholder={'username'}
                      />
                    </div>
                </div>
              <div className="item">
                  <div className="login-label">
                    <label>
                      Email:
                    </label>
                  </div>
                  <div>
                  <input type="text"
                    className="login-input"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder="email"
                  />
                  </div>
              </div>
              <div className="item">
                  <div className="login-label">
                    <label>
                      Profile Image:
                    </label>
                  </div>
                  <div>
                    <input type="file"
                      className="login-input"
                      onChange={this.updateFile}
                      size="60"
                    />
                    </div>
              </div>
              <div className="item">
                <label>
                  <input type="submit"
                    className="login-button"
                    value="Update" />
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditUserForm;