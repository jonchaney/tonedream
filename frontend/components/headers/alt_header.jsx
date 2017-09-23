import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer from '../search_bar/search_container';

class AltHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
          <span>
            <p className="tagline">independent music network</p>
          </span>
        </div>
        <div>
          <span>
            <SearchContainer />
          </span>
          <span>
            <GreetingContainer />
          </span>
        </div>
      </div>
    );
  }
}

export default AltHeader;
