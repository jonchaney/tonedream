import React from 'react';
import { Link } from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome'
import faHome from '@fortawesome/fontawesome-pro-light/faHome'
import faSearch from '@fortawesome/fontawesome-pro-light/faSearch'
import faBars from '@fortawesome/fontawesome-pro-light/faBars'
import faPaperPlane from '@fortawesome/fontawesome-pro-light/faPaperPlane'
import faCalendar from '@fortawesome/fontawesome-pro-light/faCalendar'

fontawesome.library.add(faHome)
fontawesome.library.add(faSearch)
fontawesome.library.add(faBars)
fontawesome.library.add(faPaperPlane)
fontawesome.library.add(faCalendar)

class Tab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <i className={this.props.icon} aria-hidden="true"></i>
        </div>
    );
  }
}

export default Tab;
