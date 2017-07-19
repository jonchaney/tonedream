import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (login) => (
  <nav className="login-signup">
    <ul className="nav">
      <li className="signup">sign up:</li>
      <li><Link to="/signup">artist</Link> &middot;</li>
      <li><Link to="/signup">fan</Link> &middot;</li>
      <li><Link to="/guest">guest</Link></li>
      <li><Link to="/login">login</Link></li>
    </ul>
  </nav>
);

// <button className="logout-button" onClick={login(v)}>logout</button>

const personalGreeting = (currentUser, logout) => (
	<hgroup className="logout">
    <button className="logout-button" onClick={logout}>logout</button>
	</hgroup>
);
// <h2 className="header-name">hi, {currentUser.username}</h2>

const Greeting = ({ currentUser, logout, login }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(login)
);

export default Greeting;
