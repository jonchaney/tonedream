import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (login, user) => (
  <div>
    <nav className="login-signup">
      <ul className="nav">
        <li><Link to="/signup">signup</Link></li>
        <li className="guest"><Link to="/guest">guest</Link></li>
        <li><Link to="/login">login</Link></li>
      </ul>
    </nav>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="logout">
    <ul>
      <li><button className="logout-button" onClick={logout}>logout</button></li>
       <li className="home"><Link to="/profile">home</Link></li> 
    </ul>
	</hgroup>
);

const Greeting = ({ currentUser, logout, login }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(login)
);

export default Greeting;