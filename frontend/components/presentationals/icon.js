import React from 'react';
import { Link } from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome'
import faHome from '@fortawesome/fontawesome-pro-light/faHome'
import faSearch from '@fortawesome/fontawesome-pro-light/faSearch'
import faBars from '@fortawesome/fontawesome-pro-light/faBars'
import faPaperPlane from '@fortawesome/fontawesome-pro-light/faPaperPlane'
import faCalendar from '@fortawesome/fontawesome-pro-light/faCalendar'
import faSpinner from '@fortawesome/fontawesome-pro-light/faSpinner'
import faUpload from '@fortawesome/fontawesome-pro-light/faUpload'

fontawesome.library.add(faSpinner)
fontawesome.library.add(faHome)
fontawesome.library.add(faSearch)
fontawesome.library.add(faBars)
fontawesome.library.add(faPaperPlane)
fontawesome.library.add(faCalendar)
fontawesome.library.add(faUpload)

class Icon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.class}>
        <i className={this.props.type} ></i>
      </div>
    );
  }
}

export default Icon;
