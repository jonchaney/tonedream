import React, { Component } from 'react';
import ReactHowler from 'react-howler';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.selectedTrack.id) {
      return (
        <ReactHowler
          src={this.props.selectedTrack.audio_url}
          playing={true}
          html5={true}
        />
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default AudioPlayer;