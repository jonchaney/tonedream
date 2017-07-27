import React from 'react';
import { Link } from 'react-router';
import LoadingIcon from '../albums/loading_icon';
import EditAlbumContainer from '../albums/edit_album_container';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderTracks = this.renderTracks.bind(this);
    this.pageContent = this.pageContent.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.state = {
      album: {
        title: this.props.selectedAlbum.title,
        date: this.props.selectedAlbum.date,
        imageFile: null,
        imageUrl: this.props.selectedAlbum.image_url,
        id: this.props.selectedAlbum.id,
        status: false
      }
    };
  }
  
  toggleStatus() {
    if (!this.state.status) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
    }
  }
  
  pageContent() {
    if (!this.state.status) {
      return (this.renderTracks());
    } else {
      return ( <EditAlbumContainer />);
      }
  }

  renderTracks() {
    // event listener to stop track when another is played
    // refactor code so tracks are not nested under selectedAlbum?
    // aaaand obfuscate the tracks so people can't download them from the html source
    return (
      <div>
        <ul className="track-list">
          {
            this.props.tracks.map((track, idx) =>
                <ol key={idx} className="audio-item">
                    <li className="audio-info">
                      {track.track_num} | {track.title}  
                    </li>
                  <div id="audioplayer">
                    <audio controls="controls">
                      <source src={track.audio_url} type="audio/wav"></source>
                      <source src={track.audio_url} type="audio/mpeg"></source> 
                    </audio>   
                  </div>
                </ol>
          )}
            { document.addEventListener('play', function(e){
            var audios = document.getElementsByTagName('audio');
            for(var i = 0, len = audios.length; i < len;i++){
                if(audios[i] != e.target){
                  audios[i].pause();
                    }
                }
            }, true)}  
        </ul> 
            <li className="edit">
              <button type="button" onClick={this.toggleStatus}>edit album</button>
            </li>
      </div>
    );
  }

  render() {
    return (
      <div className="album-info">
        <div className="album-info-main">
          <ul>
            <li>{this.props.selectedAlbum.title}</li>
          </ul>
        </div>
           {this.pageContent()}
      </div>
    );
  }
}

export default TrackIndex;