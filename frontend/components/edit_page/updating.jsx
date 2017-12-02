import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer from '../search_bar/search_container';

class Updating extends React.Component {
  constructor(props) {
    super(props);
  }

  listItems() {
    if (this.props.album.title) {
      return (
        <div className="updating">
          <img src={this.props.album.image}/>
          <ul>
            <li>{this.props.album.title}</li>
            <li>{this.props.album.date}</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="updating">
          <img/>
          <ul>
            <li>Title</li>
            <li>Release Date</li>
          </ul>
        </div>
      );
    }
  }

  render() {
    return this.listItems();
  }
}

export default Updating;
