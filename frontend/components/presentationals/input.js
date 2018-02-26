import React from 'react';
import { Link } from 'react-router-dom';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <input onChange={this.props.onChange} 
               value={this.props.value} 
               placeholder="Search">
        </input>
    );
  }
}

export default Input;
