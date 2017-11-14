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
            <GreetingContainer />
      </div>
    );
  }
}

export default AltHeader;
