import React, { Component } from 'react';

class EditArtistForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.state = {
      id: this.props.artist.id,
      name: this.props.artist.name,
      bio: this.props.artist.bio,
      location: this.props.artist.location,
      imageFile: null,
      imageUrl: this.props.artist.image_url
    };
  }

  componentWillMount() {
    this.props.clearArtistErrors();
  }

  componentDidUnMount() {
    this.props.clearArtist();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.artist);
    if (this.state.id !== nextProps.artist.id) {
      this.setState(nextProps.artist);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let artist = {
      name: this.state.name,
      location: this.state.location,
      bio: this.state.bio,
      image: this.state.imageUrl,
      id: this.state.id
    };
    console.log(artist);
    this.props.updateArtist(artist).then(() => this.props.history.push(`/artists/${this.props.artist.id}`));
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

  renderErrors() {
    // if (this.props.errors) {
    //   return (
    //     <ul>
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
        <form onSubmit={this.handleSubmit} className="artist-form-box">
          <div className="artist-login-form">
            {this.renderErrors()}
            <div className="item">
              <input type="text"
                autoFocus="autofocus"
                className="artist-input"
                value={this.state.name} 
                onChange={this.update('name')}
                placeholder={'name'}
              />
            </div>
            <div className="item">
              <input type="text"
                className="artist-input"
                value={this.state.location}
                onChange={this.update('location')}
                placeholder="location"
              />
            </div>
            <div className="item">
              <textarea type="text"
                className="artist-input"
                value={this.state.bio}
                onChange={this.update('bio')}
                placeholder="bio"
              />
            </div>
            <div className="item">
              <input type="file"
                className="artist-input"
                onChange={this.updateFile}
              />
            </div>
            <div className="item">
              <label>
                <input type="submit"
                  className="login-button"
                  value="Update Artist" />
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditArtistForm;