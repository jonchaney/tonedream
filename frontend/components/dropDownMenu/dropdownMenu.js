import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenuContainer from './dropdownMenuContainer.js';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  populateList() {
    if (this.props.currentUser) {
      return (
        [<Link key={1} to="">Profile</Link>,
        <Link key={2} to="/account" onClick={() => this.props.toggleList()}>Account</Link>,
        <Link key={3} to="/" onClick={() => this.props.logout().then(this.props.toggleList())}>Logout</Link>]
      );
    } else {
      return (
        [<Link key={1} to="/login" onClick={() => this.props.toggleList()}>Login</Link>,
        <Link key={2} to="/signup" onClick={() => this.props.toggleList()}>Sign Up</Link>]
      );
    }
  }

  render() {
    return (
      <ul className="drop-down-menu-tab">
        {this.populateList()}
      </ul>
    );
  }
}

export default DropdownMenu;
