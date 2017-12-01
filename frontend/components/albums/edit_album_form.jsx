import React from 'react';
import { Link } from 'react-router';

class EditAlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editAlbum = this.editAlbum.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.update = this.update.bind(this);
      this.state = {
        id: this.props.selectedAlbum.id,
        artist_id: this.props.selectedAlbum.artist_id,
        title: this.props.selectedAlbum.title,
        date: this.props.selectedAlbum.date,
        imageFile: null,
        image: this.props.selectedAlbum.image_url,
        tracks: this.state.tracks
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let album = {
      artist_id: this.state.artist_id,
      title: this.state.title,
      date: this.state.date,
      image: this.state.image,
    };
    this.props.updateAlbum(this.state.artist_id, this.state.id, album).then(
      () => this.props.history.push(`/albums/${this.state.id}`)
    );
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, image: fileReader.result });
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

  editAlbum() {
    return (
      <div className="edit-album-container">
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
                placeholder={this.state.date}
                value={this.state.date}
                onChange={this.update('date')}
              />
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
  
  render() {
    return (
      <div className="album-info">
        {this.editAlbum()}
      </div>
    );
  }
}

export default EditAlbumForm;