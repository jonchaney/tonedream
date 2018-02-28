import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './icon.js';
import DropdownMenuContainer from '../dropdownMenu/dropdownMenuContainer.js';
import SearchContainer from '../search/searchContainer.js';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      search: false
    }
  }

  menu() {
    if (this.state.menu) {
      return <DropdownMenuContainer/>;
    }
  }

  search() {
    if (this.state.search) {
      return <SearchContainer/>;
    }
  }

  homeOnClick() {
    this.setState({search: false, menu: false})
    if (this.props.location.pathname !== '/') {
      this.props.history.push('/');
    }
  }

  toggleSearchAndMenu() {
    
  }

  searchOnClick() {
    this.setState(this.state.search ? {search: false} : {search: true, menu: false})
  }

  barsOnClick() {
    this.setState(this.state.menu ? {menu: false} : {menu: true, search: false})
  }

  render() {
    return (
        <div className={this.state.menu || this.state.search ? "tabs" : ""}>
          {this.menu()}
          {this.search()}
          <nav>
            <section onClick={() => this.homeOnClick() }><Icon type="fal fa-home"/></section>
            {/* <section onClick={}on type="fal fa-calendar"/></section> */}
            <section onClick={() => this.searchOnClick()}><Icon type="fal fa-search"/></section>
            {/* <section onClick={}on type="fal fa-paper-plane"/></section> */}
            <section onClick={() => this.barsOnClick()}><Icon type="fal fa-bars"/></section>
          </nav>
        </div>
    );
  }
}

export default Tabs;
