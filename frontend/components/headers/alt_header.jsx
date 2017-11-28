import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer from '../search_bar/search_container';

class AltHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  greeting() {
    if (this.props.loggedIn) {
      return (
        <div className="settings-dropdown">
          <div className="settings-main">
            <img src={this.props.currentUser.image_url} />
            <p>{this.props.currentUser.username}</p>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </div>
          <div className="settings-list">
            {this.settings()}
          </div>
        </div>
      );
    } else {
      return (
        <GreetingContainer />
      );
    }
  }

  settings() {
      return (
        <ul>
          <Link to={`/users/${this.props.currentUser.id}`}><li>home</li></Link>
          <Link to="/artists"><li>add artists</li></Link>
          <Link to="/settings"><li>settings</li></Link>
          <li onClick={() => this.props.logout()}>logout</li>
        </ul>
      );
  }

  render() {
    return (
      <div className="alt-head">
        <div className="alt-head-tag">
          <span>
            <Link to="/">
              <img src="http://res.cloudinary.com/tonedream/image/upload/v1500576450/settings_os0b9w.png" width="24" height="25" alt="tonedream"></img>
            </Link>
            <Link to="/">
              <h1 className="alt-header">
                tonedream
            </h1>
            </Link>
          </span>
        </div>
        <div className="alt-search">
            <SearchContainer />
        </div>
            {this.greeting()}
      </div>
    );
  }
}

export default AltHeader;
