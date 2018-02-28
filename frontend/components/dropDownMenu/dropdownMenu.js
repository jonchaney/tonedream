import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenuContainer from './dropdownMenuContainer.js';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  populateList() {
    if (this.props.currentUser) {
      return (
        [<li key={5}>Profile</li>,
        <li key={6} onClick={() => this.props.history.push('./account')}>Account</li>,
        <li key={7} onClick={this.handleClick}>Logout</li>]
      );
    } else {
      return (
        [<li key={5} onClick={() => this.props.history.push('./login')}>Login</li>,
        <li key={6} onClick={() => this.props.history.push('./signup')}>Sign Up</li>]
      );
    }
  }

  handleClick() {
    this.props.logout().then(this.props.history.push('./'));
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
