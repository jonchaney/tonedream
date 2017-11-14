import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    if (this.props.formType === 'login') {
      if (this.state.field.includes('@')) {
        user = {
          email: this.state.field,
          password: this.state.password,
        };
      } else {
        user = {
          username: this.state.field,
          password: this.state.password
        };
      }
    } else {
      user = {
        username: this.state.field,
        email: this.state.email,
        password: this.state.password
      };
    }
    this.props.processForm(user);
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
    this.props.login(user).then(() => this.props.history.push('./145'));
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
      this.guestAccount(); 
      return null;
    } else {
      let type = 'hidden';
      let placeholder = 'username/email';
      if (this.props.formType === 'signup') {
        type = 'text';
        placeholder = 'username';
      }
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
                    value={this.state.field}
                    onChange={this.update('field')}
                    placeholder={placeholder}
                  />
                </label>
                <label>
                  <input type={type}
                    autoFocus="autofocus"
                    className="login-input"
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder={'email'}
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
