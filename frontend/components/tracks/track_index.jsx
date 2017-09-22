import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoadingIcon from '../albums/loading_icon';
import EditAlbumContainer from '../albums/edit_album_container';
import DownloadLink from 'react-download-link';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div className="album-info">
        <div className="album-info-main">
          <ul>
             <li>{this.props.selectedAlbum.title}</li> 
          </ul>
        </div>
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
            {document.addEventListener('play', function (e) {
              var audios = document.getElementsByTagName('audio');
              for (var i = 0, len = audios.length; i < len; i++) {
                if (audios[i] != e.target) {
                  audios[i].pause();
                }
              }
            }, true)}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(TrackIndex);