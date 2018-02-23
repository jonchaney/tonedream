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
          <Tab icon="fas fa-home"/>
          <Tab icon="fas fa-search"/>
          <Tab icon="far fa-envelope"/>
          <Tab icon="fas fa-bars"/>
        </footer>
    );
  }
}

export default TabsFooter;
