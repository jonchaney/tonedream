import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <ul className="nav">
      <li><Link to="/login">login</Link></li>
      <li><Link to="/signup">sign up</Link></li>
    </ul>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">hi, {currentUser.username}</h2>
    <button className="header-button" onClick={logout}>logout</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
