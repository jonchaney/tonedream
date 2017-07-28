import React from 'react';
import { Link } from 'react-router-dom';

class SelectedArtistInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loading } = this.props;

    return (
      <div className="user-info">
        <img className="profile-pic" src={this.props.selectedArtist.image_url} />
        <ul>
          <li className="band">
            {this.props.selectedArtist.band}
          </li>
          <li className="location">
            {this.props.selectedArtist.location}
          </li>
          <li className="bio">
            {this.props.selectedArtist.bio}
          </li>
          <li className="submit-edit">
            <Link to="/profile/edit">edit profile</ Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SelectedArtistInfo;