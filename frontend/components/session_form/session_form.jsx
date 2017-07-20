import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
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
    this.props.login({user}).then(() => this.props.history.push('/'));
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

  render() {
    if (this.props.location.pathname === '/guest') {
      {this.guestAccount()}
      return null;
    } else {
      const bandName = 'band name';
      const username = 'username';
      const placeholder = username;
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <div className="login-form">
            {this.navLink()}
            {this.renderErrors()}
            <br/>
            <div className="login-input">
              <label>
                <input type="text"
                  autoFocus="autofocus"
                  className="login-input"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder={placeholder}
                />
              </label>
              <br/>
              <br/>
              <label>
                <input type="password"
                  className="login-input"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="password"
                />
              </label>
                <input type="submit"
                       className="login-button"
                       value="submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
  }
}

export default withRouter(SessionForm);
