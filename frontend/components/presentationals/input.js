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
               autoFocus={this.props.autoFocus}
               type={this.props.type}
               className={this.props.className}
               value={this.props.value}
        ></input>
    );
  }
}

export default Input;
