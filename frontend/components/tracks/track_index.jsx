import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from '../albums/loading_icon';
import EditAlbumContainer from '../albums/edit_album_container';
import DownloadLink from 'react-download-link'

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
    // needs refactor to ensure tracks always print in order
    
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
                  {/* unknown bug, update not working // trash not set up  */}
                  <li><Link key={track.id} to={`/profile/album/update/track/${track.id}`}><i className="fa fa-pencil" aria-hidden="false"></i></Link></li> 
                  <li><DownloadLink
                    filename={track.title}
                    label={<i className="fa fa-download" aria-hidden="false"></i>}
                    exportFile={() => {track.url;}} />
                  </li>   
                  {/* <li><i className="fa fa-trash-o" aria-hidden="false"></i></li> */}
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
          <div className="edit-album-buttons">
            <li className="submit-edit">
              <Link to="/profile/album/update">update album</Link>
            </li>
            <li className="submit-edit">
              <Link to="/profile/album/upload/track">add track</Link>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackIndex;