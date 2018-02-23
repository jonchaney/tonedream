import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <header>
          <div className="logo">
            <h1>
              tonedream
            </h1>
          </div>
        </header>
    );
  }
}

export default Header;
