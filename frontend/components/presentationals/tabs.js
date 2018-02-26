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
          <Icon type="fal fa-home"/>
          {/* <Icon icon="fal fa-calendar"/> */}
          <Icon type="fal fa-search"/>
          {/* <Icon icon="fal fa-paper-plane"/> */}
          <Icon type="fal fa-bars"/>
        </nav>
    );
  }
}

export default Tabs;
