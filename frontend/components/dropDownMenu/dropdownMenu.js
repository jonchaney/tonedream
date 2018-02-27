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
        [<li key={5}>Profile</li>,
        <li key={6}>Account</li>]
      );
    } else {
      return (
        [<li key={5} onClick={() => this.props.history.push('./login')}>Login</li>,
        <li key={6} onClick={() => this.props.history.push('./signup')}>Sign Up</li>]
      );
    }
  }

  handleClick() {
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
        <li>About</li>
        {this.renderLogout()}
      </ul>
    );
  }
}

export default DropdownMenu;
