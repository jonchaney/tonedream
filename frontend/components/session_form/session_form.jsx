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

  formType() {
    if (this.props.formType === 'login') {
      return <li><Link to="./signup">or sign up</Link></li>;
    } else {
      return <li><Link to="./login">or log in</Link></li>;
    }
  }

  guestAccount() {
    const user = {username: "jonathan", password: "password"};
    this.props.login(user).then(() => this.props.history.push('./users/159'));
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
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="login-form">
                {this.navLink()}
                <div className="top-divider"></div>
                {this.renderErrors()}
                <div className="login-input">
                  <div className="item">
                      <div className="login-label">
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
                    <div className="login-label">
                      <label style={styles}>
                        Email
                      </label>
                    </div>
                    <div>
                        <input type={type}
                          className="login-input"
                          value={this.state.email}
                          onChange={this.update('email')}
                        />
                    </div>
                  </div>
                  <div className="item">
                    <div className="login-label">
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
                  <div className="item">
                      <label>
                        <input type="submit"
                              className="login-button"
                              value="submit" />
                      </label>
                  </div>
                </div>
                  <div className="formtype">
                    {this.formType()}
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
