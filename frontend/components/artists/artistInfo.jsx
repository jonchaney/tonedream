import React from 'react';
import { Link } from 'react-router-dom';

class ArtistInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="user-info">
          <img className="profile-pic" src={this.props.artist.image_url} />
          <ul>
            <li className="band">
                {this.props.artist.name}
            </li>
            <li className="location">
                {this.props.artist.location}
            </li>
            <li className="bio">
                {this.props.artist.bio}
            </li>
          </ul>
        </div>
      );
  }
}

export default ArtistInfo;