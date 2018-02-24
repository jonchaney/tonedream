import React from 'react';
import { Link } from 'react-router-dom';
import Tab from '../tab.js';
import fontawesome from '@fortawesome/fontawesome'
import faHome from '@fortawesome/fontawesome-pro-light/faHome'
import faSearch from '@fortawesome/fontawesome-pro-light/faSearch'
import faBars from '@fortawesome/fontawesome-pro-light/faBars'

fontawesome.library.add(faHome)
fontawesome.library.add(faSearch)
fontawesome.library.add(faBars)

class TabsFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <footer>
          <Tab icon="fal fa-home"/>
          <Tab icon="fal fa-search"/>
          {/* <Tab icon="far fa-envelope"/> */}
          <Tab icon="fal fa-bars"/>
        </footer>
    );
  }
}

export default TabsFooter;
