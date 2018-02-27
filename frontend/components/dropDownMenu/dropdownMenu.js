import React from 'react';
import { Link } from 'react-router-dom';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  profile() {
    if (this.props.currentUser) {
      return (
        <li>Profile</li>
      );
    } else {
      return (
        <li>Login or Sign Up</li>
      );
    }
  }

  handleClick() {
    console.log('test');
    this.props.logout();
  }

  renderLogout() {
    if (this.props.currentUser) {
      return (
        <li onClick={this.handleClick}>Logout</li>
      );
    }
  }

  render() {
    return (
      <ul className="drop-down-menu-tab">
        {this.profile()}
        <li>Account</li>
        <li>About</li>
        {this.renderLogout()}
      </ul>
    );
  }
}

export default DropdownMenu;
