import React from 'react';
import { Link } from 'react-router-dom';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      band: '',
      bio: '',
      hidden: 'hidden'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    this.props.updateUser(user);
  }

  cancelUpdate() {
    return (
      <div>
        <Link to="/artist">cancelUpdate</Link>  
      </div>
    );
  }

  render() {
    const { loading } = this.props;

    return (
      <div className="edit-profile-form">
        <form onSubmit={this.handleSubmit} className="edit-profile-form-box">
          <div className="edit-profile">
            {this.renderErrors()}
              <label>
                <input type="text"
                  autoFocus="autofocus"
                  className="edit-profile-input"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder={'username'}
                />
              </label>
              <label>
                <input type="text"
                  className="edit-profile-input"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder={this.props.currentUser.email}
                />
              </label>
              <label>
                <input type="text"
                  autoFocus="autofocus"
                  className="edit-profile-input"
                  value={this.state.band}
                  onChange={this.update('band')}
                  placeholder={this.props.currentUser.band}
                />
              </label>
              <label>
                <input type="text"
                  autoFocus="autofocus"
                  className="edit-profile-input"
                  value={this.state.bio}
                  onChange={this.update('bio')}
                  placeholder="bio"
                />
              </label>
              <label>
                <input type="text"
                  autoFocus="autofocus"
                  className="edit-profile-input"
                  value={this.state.location}
                  onChange={this.update('location')}
                  placeholder="location"
                />
              </label>
              <label>
                <input type="submit"
                  className="login-button"
                  value="submit" />
              </label>
          </div>
          {this.cancelUpdate()}
        </form>
      </div>
    );
  }
}

export default EditProfileForm;