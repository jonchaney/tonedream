import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './icon.js';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav>
          <Link to="/"><Icon type="fal fa-home"/></ Link>
          {/* <Link to="/"><Icon type="fal fa-calendar"/></ Link> */}
          <Link to="/search"><Icon type="fal fa-search"/></ Link>
          {/* <Link to="/"><Icon type="fal fa-paper-plane"/></ Link> */}
          <Link to="/"><Icon type="fal fa-bars"/></ Link>
        </nav>
    );
  }
}

export default Tabs;
