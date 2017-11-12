import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import {Howl} from 'howler';
import { Link, Redirect } from 'react-router-dom';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPlayOrPause() {
    if (this.props.playing) {
      return (
        <li>
          <i onClick={() => this.props.pauseTrack()} className="fa fa-pause" aria-hidden="true"></i>
        </li>
      );
    } else {
      return (
        <li>
          <i onClick={() => this.props.playTrack()} className="fa fa-play" aria-hidden="true"></i>
        </li>
      );
    }
  }

  renderMute() {
    if (this.props.mute) {
      return (
        <i onClick={() => this.props.muteTrack()} className="fa fa-volume-off" aria-hidden="true"></i>
      );
    } else {
      return (
        <i onClick={() => this.props.muteTrack()} className="fa fa-volume-up" aria-hidden="true"></i>
      );
    }
  }

  nextTrack() {
    let length = this.props.tracks.length;
    let currentTrack = this.props.selectedTrack.track_num - 1;
    let nextTrack = currentTrack;
    if (this.props.shuffled) {
      while (currentTrack === nextTrack) {
        nextTrack = Math.floor(Math.random() * (length - 1) + 1);
      }
    } else {
      nextTrack = (currentTrack + 1) % length;
    }
    console.log(currentTrack);
    this.props.receiveTrack(this.props.tracks[nextTrack]);
  }

  prevTrack() {
    let length = this.props.tracks.length;
    let currentTrack = (this.props.selectedTrack.track_num);
    if (currentTrack === 1) {
      currentTrack = length;
    } else {
      currentTrack -= 1;
    }
    this.props.receiveTrack(this.props.tracks[(currentTrack - 1) % length]);
  }

  loop() {
    // if the current track is looping then loop the album on click
    if(this.props.loopedSong) {
      this.props.loopSong()
      this.props.loopAlbum();
    // if the current album is looping, turn off looping
    } else if (this.props.loopedAlbum) {
      this.props.loopAlbum();
    // else loop the current track on click
    } else {
      this.props.loopSong();
    }
  }


  getShuffleStyle() {
    let shuffleStyle = {
      color: 'black'
    };
    if (this.props.shuffled) {
      shuffleStyle.color = '#649922';
    }
    return shuffleStyle;
  }

  render() {
    if (this.props.selectedTrack.id) {
      return (
        <div className="audio-player">
          <ReactHowler
            src={this.props.selectedTrack.audio_url}
            playing={this.props.playing}
            html5={true}
            onEnd={() => this.nextTrack()}
            mute={this.props.mute}
          />
          <ul className="audio-player-controls">
            <li>
              <i onClick={() => this.prevTrack()} className="fa fa-step-backward" aria-hidden="true"></i>
            </li>
              {this.renderPlayOrPause()}
            <li>
              <i onClick={() => this.nextTrack()} className="fa fa-step-forward" aria-hidden="true"></i>
            </li>
            <li style={this.getShuffleStyle()}>
              <i onClick={() => this.props.shuffle()} className="fa fa-random" aria-hidden="true"></i>
            </li>
            <li>
              <i onClick={() => this.loop()}className="fa fa-repeat" aria-hidden="true"></i>
            </li>
            <li>
              {this.renderMute()}
            </li>
          </ul>
          <div className="artist-info">
              <div>
                <img className="audio-player-photo" value={this.props.selectedAlbum.id} src={this.props.selectedAlbum.image_url} />
              </div>
              <div className="artist-info-data">
                <p>
                  <Link to={`/${this.props.selectedArtist.id}`}>{this.props.selectedArtist.band}</Link>
                </p>
                <p>
                  {this.props.selectedTrack.title}
                </p>
              </div>
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