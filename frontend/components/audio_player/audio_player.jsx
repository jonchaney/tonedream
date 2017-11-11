import React, { Component } from 'react';
import ReactHowler from 'react-howler';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      muted: false,
      loop: false,
      shuffle: false
    };
  }

  renderPlayOrPause() {
    if (this.state.playing) {
      return (
        <i className="fa fa-pause" aria-hidden="true"></i>
      );
    } else {
      return (
        <i className="fa fa-play" aria-hidden="true"></i>
      );
    }
  }

  render() {
    if (this.props.selectedTrack.id) {
      return (
        <div className="audio-player">
          <ReactHowler
            src={this.props.selectedTrack.audio_url}
            playing={true}
            html5={true}
          />
          <div className="audio-player-controls">
            <i className="fa fa-step-backward" aria-hidden="true"></i>
            {this.renderPlayOrPause()}
            <i className="fa fa-step-forward" aria-hidden="true"></i>
            <i className="fa fa-random" aria-hidden="true"></i>
            <i className="fa fa-repeat" aria-hidden="true"></i>
          </div>
          <div className="artist-info">

          </div>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default AudioPlayer;