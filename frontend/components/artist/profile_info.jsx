import React from 'react';
import { Link } from 'react-router';

class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loading } = this.props;
    
    return (
      <div className="user-info">
        <img className="profile-pic" src={this.props.currentUser.image_url} />
        <ul>
          <li className="band">
            {this.props.currentUser.band}
          </li>
          <li className="location">
            {this.props.currentUser.location}
          </li>
          <li className="bio">
            {this.props.currentUser.bio}
          </li> 
        </ul>
      </div>
    );
  }
}

export default ProfileInfo;