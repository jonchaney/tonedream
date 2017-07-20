import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (login) => (
  <nav className="login-signup">
    <ul className="nav">
      <li><Link to="/signup">signup</Link> &middot;</li>
      <li><Link to="/guest">guest</Link></li>
      <li><Link to="/login">login</Link></li>
    </ul>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="logout">
    <button className="logout-button" onClick={logout}>logout</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout, login }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(login)
);

export default Greeting;
