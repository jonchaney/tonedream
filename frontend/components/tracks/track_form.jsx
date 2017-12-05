import React from 'react';
import { Link } from 'react-router';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      id: null,
      album_id: this.props.selectedAlbum.id,
      title: null,
      download: false,
      audioFile: null,
      audio: null,
      trackNum: null
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let track = {
      album_id: this.props.selectedAlbum.id,
      title: this.state.title,
      download: this.state.download,
      audio: this.state.audio,
      trackNum: this.state.trackNum
    };
    this.props.addTrack(track);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ audioFile: file, audio: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    // if (this.props.errors) {
    //   return (
    //     <ul className="errors">
    //       {this.props.errors.map((error, i) => (
    //         <li key={`error-${i}`}>
    //           {error}
    //         </li>
    //       ))}
    //     </ul>
    //   );
    // }
  }

  render() {
    return (
      <div className="artist-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {/* {this.renderErrors()}  */}
          <div className="artist-login-form">
            <div className="item">
              <input type="text"
                className="artist-input"
                placeholder={this.state.title}
                onChange={this.update('title')}
              />
            </div>
            <div className="item">
              <input type="text"
                className="artist-input"
                placeholder={this.state.trackNum}
                onChange={this.update('trackNum')}
              />
            </div>
            <div className="item">
              <input type="file"
                className="artist-input"
                onChange={this.updateFile}
              />
            </div>
            <div className="item">
              <input type="submit"
                className="login-button"
                value="submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TrackForm;