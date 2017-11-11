import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import AudioPlayerContainer from '../audio_player/audio_player_container';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(id) {
    if (this.props.selectedTrack.id === id) {
      this.props.playPauseTrack();
    } else {
      this.props.playPauseTrack();
      this.props.fetchSelectedTrack(id).then(() =>
        this.props.playPauseTrack()
      );
    }
  }

  renderPlayOrPause(id){
    if (this.props.selectedTrack.id === id && this.props.playing) {
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
              <p>by {this.props.selectedArtist.band}</p>
              <div>
              <div className="track-list">
                  {
                    this.props.tracks.map((track, idx) =>
                      <ul key={idx} className="audio-item">
                        <li onClick={() => this.handleClick(track.id)}>
                          {this.renderPlayOrPause(track.id)}
                        </li>
                        <li className="track-info">
                          {track.track_num}. {track.title}
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