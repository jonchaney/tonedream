import React from 'react';
import { Link } from 'react-router-dom';

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
