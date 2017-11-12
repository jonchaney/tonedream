import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks(login, user) {
    let greeting = "alt-greeting";
    let loginSignup = "alt-login-signup";
    let nav = "alt-nav";
    let guest = "alt-guest";
    if (this.props.location.pathname === '/') {
      greeting = "greeting";
      loginSignup = "login-signup";
      nav = "nav";
      guest = "guest";
    }
    return (
      <div className={greeting}>
        <nav className={loginSignup}>
          <ul className={nav}>
            <li><Link to="/signup">signup</Link></li>
            <li className={guest}><Link to="/guest">guest</Link></li>
            <li><Link to="/login">login</Link></li>
          </ul>
        </nav>
      </div>
    );
  }

  personalGreeting(currentUser, logout) {
    let styleLogout = "alt-logout";
    let home = "alt-home";
    let logoutButton = "alt-logout-button";
    if (this.props.location.pathname === '/') {
      styleLogout = "logout";
      home = "home";
      logoutButton = "logout-button";
    }
    return (
      <hgroup className={styleLogout}>
        <ul>
          <li className={home}><Link to={`/${this.props.currentUser.id}`}>home</Link></li>
          <li className={home} onClick={logout}><Link to="/">logout</Link></li>
        </ul>
      </hgroup>
    );
  }

  render() {
    const greeting = this.props.currentUser ? 
                     this.personalGreeting(this.props.currentUser, this.props.logout) : 
                     this.sessionLinks(this.props.login);       
    return greeting;
  }



}

export default Greeting;