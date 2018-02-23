import React from 'react';
import { Link } from 'react-router-dom';

class Icon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <i class={this.props.icon}></i>
    );
  }
}

export default Icon;
