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
      <div className="album-main">

          <div className="album-info">
              <h1>{this.props.selectedAlbum.title}</h1>
              <p>by {this.props.selectedArtist.band}</p>
              <div>
              <div className="track-list">
                  {
                    this.props.tracks.map((track, idx) =>
                      <ul key={idx} className="audio-item">
                        <li>
                          <i className="fa fa-play" aria-hidden="true"></i>
                        </li>
                        <li className="track-info">
                          {track.track_num}. {track.title}
                        </li>
                      </ul>
                    )}
                  {document.addEventListener('play', function (e) {
                    var audios = document.getElementsByTagName('audio');
                    for (var i = 0, len = audios.length; i < len; i++) {
                      if (audios[i] != e.target) {
                        audios[i].pause();
                      }
                    }
                  }, true)}
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