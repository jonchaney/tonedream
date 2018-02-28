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
               placeholder={this.props.placeHolder}
               autoFocus={this.props.autoFocus}>
        </input>
    );
  }
}

export default Input;
