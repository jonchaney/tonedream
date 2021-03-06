import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Howl} from 'howler';

import AudioPlayerContainer from '../audio_player/audio_player_container';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(track) {
    if (!this.props.playing && this.props.selectedTrack.id === track.id) {
      this.props.playTrack();
    } else if (this.props.playing && this.props.selectedTrack.id === track.id) {
      this.props.pauseTrack();
    } else {
      this.props.receiveAudio(this.props.selectedAlbum, this.props.selectedArtist, track);
      this.props.playTrack();
    }
  }

  renderPlayOrPause(id) {
    if (this.props.playing && this.props.selectedTrack.id === id) {
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
    return (
      <div className="album-main">
          <div className="album-info">
              <h1>{this.props.selectedAlbum.title}</h1>
              {<p>by {this.props.selectedArtist.name}</p>}
              <div>
              <div className="track-list">
                  {
                    this.props.tracks.map((track, idx) =>
                      <ul key={idx} className="audio-item">
                        <li onClick={() => this.handleClick(track)}>
                          {this.renderPlayOrPause(track.id)}
                        </li>
                        <li className="track-info">
                          {track.track_num}. {track.title}
                        </li>
                        <li>

                        </li>
                      </ul>
                    )}
                </div> 
              </div>
          </div>
          <div className="outer-album-show-photo">
            <img className="album-show-photo" value={this.props.selectedAlbum.id} src={this.props.selectedAlbum.image_url} />
          </div>
      </div>
    );
  }
}

export default withRouter(TrackIndex);