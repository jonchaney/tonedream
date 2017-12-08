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
      artist: null,
      download: false,
      tracks: [],
      trackTitle: "",
      audioFile: null
    };
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        title: nextProps.album.title,
        date: nextProps.album.date,
        image: nextProps.album.image,
        artist: nextProps.artist.name,
        download: nextProps.album.download,
        tracks: nextProps.album.tracks,
        trackTitle: nextProps.album.trackTitle,
        audioFile: nextProps.album.audioFile
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
        <li className="updating-release">{this.state.date}</li>
      );
    } else {
      return (
        <li className="updating-release">Release Date</li>
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

  downloadable(download) {
    if (download) {
      return (
        <li>downloadable</li>
      );
    } else {
      return <li></li>;
    }
  }

  track() {
    if (this.state.trackTitle) {
      return null;
    } else {
      return (
        <li>{this.state.trackTitle}</li>
      );
    }
  }

  audioFileName() {
    if (this.state.audioFile) {
      return (
        <li>{this.state.audioFile.name}</li>
      );
    } else {
      return <li></li>;
    }
  }

  tracks() {
      let tracks = this.state.tracks.map((track, idx) => {
        return (
          <div className="updating-track" key={idx}>
            <div className="track-num">
              <p>{idx+1}</p>
            </div>
            <ul className="track-info">
              <li>{track.title}</li>
              <li>{track.audioFile.name}</li>
              {this.downloadable(track.download)}
            </ul>
          </div>
        );
      });
      return tracks;
  }

  updating() {
    if (this.state.trackTitle !== "") {
      return (
        <div className="updating-track">
          <div className="track-num">
            <p>{this.state.tracks.length + 1}</p>
          </div>
          <ul className="track-info">
            <li>{this.state.trackTitle}</li>
            {this.audioFileName()}
            {this.downloadable(this.state.download)}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="updating">
        <div className="update-album">
        {this.image()}
          <ul className="updating-ul">
            {this.title()}
            {this.date()}
          </ul>
        </div>
        <div className="updateing-track-container">
          {this.tracks()}
          {this.updating()}
        </div>
      </div>
    );
  }
}

export default Updating;
