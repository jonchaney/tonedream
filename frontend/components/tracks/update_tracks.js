import React from 'react';
import { Link } from 'react-router';

class EditAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editAlbum = this.editAlbum.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      id: this.props.selectedAlbum.id,
      title: this.props.selectedAlbum.title,
      date: this.props.selectedAlbum.date,
      imageFile: null,
      imageUrl: this.props.selectedAlbum.image_url,
      status: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('this.state.id');
    let formData = new FormData();
    formData.append("album[title]", this.state.title);
    formData.append("album[date]", this.state.date);
    formData.append("album[image]", this.state.imageUrl);
    this.props.updateFormAlbum(formData, this.state.id);
    this.toggleStatus();
  }

  toggleStatus() {
    if (!this.state.status) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
    }
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
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

export default EditAlbum;