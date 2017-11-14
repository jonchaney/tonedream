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
      return <li>Log in</li>;
    } else {
      return <li>Sign up</li>;
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
      let styles = {
        display: 'none'
      };
      let type = 'hidden';
      let placeholder = 'Username / email';
      if (this.props.formType === 'signup') {
        type = 'text';
        placeholder = 'Username';
        styles.display = "";
      }
      return (
        <div>
          <div className="head">
            <div className="head-tag">
              <span>
                <Link to="/">
                  <img src="http://res.cloudinary.com/tonedream/image/upload/v1500576450/settings_os0b9w.png" width="50" height="51" alt="tonedream"></img>
                </Link>
                <Link to="/">
                  <h1 className="header">
                    tonedream
              </h1>
                </Link>
              </span>
            </div>
          </div>
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="login-form">
                {this.navLink()}
                <div className="top-divider"></div>
                {this.renderErrors()}
                <div className="login-input">
                  <div className="item">
                    <div>
                      <label>
                        {placeholder}
                      </label>
                    </div>
                    <div>
                      <input type="text"
                        autoFocus="autofocus"
                        className="login-input"
                        value={this.state.field}
                        onChange={this.update('field')}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <label style={styles}>
                        Email
                      </label>
                    </div>
                    <div>
                        <input type={type}
                          autoFocus="autofocus"
                          className="login-input"
                          value={this.state.email}
                          onChange={this.update('email')}
                        />
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <label>
                        Password
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="password"
                          className="login-input"
                          value={this.state.password}
                          onChange={this.update('password')}
                        />
                      </label>
                      </div>
                  </div>
                  <div>
                    <label>
                      <input type="submit"
                            className="login-button"
                            value="submit" />
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
         </div>
      );
    }
  }
}

export default withRouter(SessionForm);
