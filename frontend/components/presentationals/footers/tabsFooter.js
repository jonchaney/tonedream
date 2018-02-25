import React from 'react';
import { Link } from 'react-router-dom';
import Tab from '../tab.js';

class TabsFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <footer>
          <Tab icon="fal fa-home"/>
          <Tab icon="fal fa-calendar"/>
          <Tab icon="fal fa-search"/>
          <Tab icon="fal fa-paper-plane"/>
          <Tab icon="fal fa-bars"/>
        </footer>
    );
  }
}

export default TabsFooter;
