import React from 'react';
import { Link } from 'react-router';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchAlbums();
    this.userInfo = this.userInfo.bind(this);
    this.showTracks = this.showTracks.bind(this);
  }

  userInfo() {
    return(
      <div className="user-info">
          <img className="profile-pic" src={this.props.currentUser.image_url} />
          <ul>
            <li className="band">
              {this.props.currentUser.band}
            </li>
            <li className="location">
              {this.props.currentUser.location}
            </li>
            {/* <li className="bio">
                {this.props.currentUser.bio}
            </li> */}
          </ul>
      </div>
    );
  }

  showTracks() {

  }

  render() {
      return (
        <div className="artist-profile">
          { this.userInfo() }
          <div className="album-index-container">
              {this.props.albums.map((album, idx) =>
            <ul key={idx}>
                <img src={album.image_url}/>
            </ul>
              )}
          </div>
        </div>

    );
  }
}

export default AlbumIndex;