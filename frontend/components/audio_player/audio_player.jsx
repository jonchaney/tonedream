import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import {Howl} from 'howler';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPlayOrPause() {
    if (this.props.playing) {
      return (
        <li onClick={() => this.props.playPauseTrack()}>
          <i className="fa fa-pause" aria-hidden="true"></i>
        </li>
      );
    } else {
      return (
        <li onClick={() => this.props.playPauseTrack()}>
          <i className="fa fa-play" aria-hidden="true"></i>
        </li>
      );
    }
  }

  render() {
    if (this.props.selectedTrack.id) {
      return (
        <div className="audio-player">
          <ReactHowler
            src={this.props.selectedTrack.audio_url}
            playing={this.props.playing}
            ref={(ref) => (this.player = ref)}
            html5={true}
          />
          <ul className="audio-player-controls">
            <li>
              <i className="fa fa-step-backward" aria-hidden="true"></i>
            </li>
              {this.renderPlayOrPause()}
            <li>
              <i className="fa fa-step-forward" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-random" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-repeat" aria-hidden="true"></i>
            </li>
          </ul>
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