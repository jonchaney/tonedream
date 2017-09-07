import React from 'react';
import { Link } from 'react-router';

class AddTrack extends React.Component {
  constructor(props) {
    // add errors
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      id: "",
      album_id: this.props.selectedAlbum.id,
      title: '',
      download: false,
      audioFile: "",
      audioUrl: "",
      trackNum: 0
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // check if download box was checked
    let download = false;
    if (this.state.download === 'on') {
      download = true;
    }

    let formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[download]", download);
    formData.append("track[audio]", this.state.audioUrl);
    formData.append("track[track_num]", this.state.trackNum);
    formData.append("track[album_id]", this.state.album_id);
    this.props.addTrack(formData);
    this.props.history.push(`/profile/album`);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ audioFile: file, audioUrl: fileReader.result });
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

  render() {
    return (
      <div className="add-track-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {/* {this.renderErrors()}  */}
          <div className="login-input-box">
            <label>
              <input type="text"
                className="edit-input"
                placeholder={this.state.title}
                value={this.state.title}
                onChange={this.update('title')}
              />
            </label>
            <label>
              <input type="text"
                className="edit-input"
                placeholder={this.state.trackNum}
                value={this.state.trackNum}
                onChange={this.update('trackNum')}
              />
            </label>
            <label>
              allow download
          <input
                name="download"
                type="checkbox"
                checked={this.state.download}
                onChange={this.update('download')} />
            </label>
            <label>
              <input type="file"
                className="edit-input"
                onChange={this.updateFile}
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
}

export default AddTrack;