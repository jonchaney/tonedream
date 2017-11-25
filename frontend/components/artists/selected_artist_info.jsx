import React from 'react';
import { Link } from 'react-router-dom';

class SelectedArtistInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading) {
      return (<div>Loading...</div>);
    } else {
      return (
        <div className="user-info">
          <img className="profile-pic" src={this.props.selectedArtist.image_url} />
          <ul>
            <li className="band">
                {this.props.selectedArtist.name}
            </li>
            <li className="location">
                {this.props.selectedArtist.location}
            </li>
            <li className="bio">
                {this.props.selectedArtist.bio}
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default SelectedArtistInfo;