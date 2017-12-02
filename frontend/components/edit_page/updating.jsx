import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer from '../search_bar/search_container';

class Updating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      date: null,
      image: null,
      artist: null
    };
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        title: nextProps.album.title,
        date: nextProps.album.date,
        image: nextProps.album.image,
        artist: nextProps.artist.name
      });
  }

  title() {
    if (this.state.title) {
      return (
        <li>{this.state.title}</li>
      );
    } else {
      return (
        <li>Untitled Album</li>
      );
    }
  }
  
  date() {
    if (this.state.date) {
      return (
        <li>{this.state.date}</li>
      );
    } else {
      return (
        <li>Release Date</li>
      );
    }
  }

  image() {
    if (this.state.image) {
      return (
        <img width="100" height="100" src={this.state.image} />
      );
    } else {
      return (
        <img width="100" height="100" />
      );
    }
  }

  render() {
    return (
      <div className="updating">
        {this.image()}
        <ul className="updating-ul">
          {this.title()}
          {this.date()}
        </ul>
      </div>
    );
  }
}

export default Updating;
