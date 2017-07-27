import React from 'react';
import { Link } from 'react-router';
import LoadingIcon from '../albums/loading_icon';

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderTracks = this.renderTracks.bind(this);
    this.pageContent = this.pageContent.bind(this);
    this.editAlbum = this.editAlbum.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);
    this.update = this.update.bind(this);

    // this.editTrack = this.editTrack.bind(this);
    this.state = {
      track: {
        audioUrl: null,
        download: null,
        id: null,
        title: null,
        track_num: null,
      },
      album: {
        title: this.props.selectedAlbum.title,
        date: this.props.selectedAlbum.date,
        imageUrl: this.props.selectedAlbum.date,
        id: this.props.selectedAlbum.id
      },
      status: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("album[title]", this.state.album.title);
    formData.append("album[date]", this.state.album.date);
    formData.append("user[image]", this.state.album.imageUrl);

    this.props.updateAlbum(formData, this.state.album.id);
    this.toggleStatus();
  }

  toggleStatus() {
    if (!this.state.status) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
    }
  }

  update(field) {
    console.log(field);
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  pageContent() {
    if (!this.state.status) {
      return (this.renderTracks());
    } else {
      return (this.editAlbum());
      }
  }

  updateImageFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({album: { imageFile: file, imageUrl: fileReader.result }});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  
  editAlbum() {
    return (
      <div className="edit-album-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {/* {this.renderErrors()}  */}
          <div className="login-input-box">
            <label>
              <input type="text"
                autoFocus="autofocus"
                className="edit-input"
                value={this.state.album.title}
                onChange={this.update('title')}
              />
            </label>
            <label>
              <input type="text"
                className="edit-input"
                value={this.state.album.date}
                onChange={this.update('date')}
              />
            </label>
            <label>
              <input type="file"
                className="edit-input"
                onChange={this.updateImageFile}
              />
            </label>
            <label>
              <input type="submit"
                className="submit-edit"
                value="submit" />
            </label>
          </div>
        </form>
      </div>
     );
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