import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      band: '',
      hidden: 'hidden'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.bandForm = this.bandForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push(`./${this.props.currentUser.id}`);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    if (this.band) {
      user = this.state;
    } else {
      user = {username: this.state.username,
              password: this.state.password,
              email: this.state.email
            };
    }
    this.props.processForm(user).then(() => this.props.history.push(`./${this.props.currentUser.id}`));
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <li>login</li>;
    } else {
      return <li>sign up</li>;
    }
  }

  guestAccount() {
    const user = {username: "guest", password: "password"};
    this.props.login(user).then((id) => this.props.history.push('./145'));
  }

  renderErrors() {
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

  bandForm(e) {
    if (this.state.hidden === 'text') {
      this.setState({band: ''});
    }
    this.state.hidden = this.state.hidden === 'hidden' ? 'text' : 'hidden';
    this.setState({hidden: this.state.hidden});
  }

  render() {
    if (this.props.location.pathname === '/guest') {
      { this.guestAccount(); }
      return null;
    } else {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            {this.navLink()}
            {this.renderErrors()}
            <div className="login-input">
              <label>
                <input type="text"
                  autoFocus="autofocus"
                  className="login-input"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder={'username'}
                />
              </label>
              <label>
                <input type="text"
                  className="login-input"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="email"
                />
              </label>
              <label>
                <input type="password"
                  className="login-input"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="password"
                />
              </label>
              <label>
                <input type={this.state.hidden}
                  autoFocus="autofocus"
                  className="login-input"
                  value={this.state.band}
                  onChange={this.update('band')}
                  placeholder={'artist name'}
                />
              </label>
              <label className="check-box">artist account
                <input type="checkbox" name="band" value="band" onClick={this.bandForm} />
              </label>
              <label>
                <input type="submit"
                       className="login-button"
                       value="submit" />
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
  }
}

export default withRouter(SessionForm);
