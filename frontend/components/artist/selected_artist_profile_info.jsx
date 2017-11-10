import React from 'react';
import { Link } from 'react-router-dom';

class SelectedArtistInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    if (!this.props.selectedArtist.artist) {
      return (<div>Loading...</div>);
    } else {
      return (
        <div className="user-info">
          <img className="profile-pic" src={this.props.selectedArtist.artist.image_url} />
          <ul>
            <li className="band">
                {this.props.selectedArtist.artist.band}
            </li>
            <li className="location">
                {this.props.selectedArtist.artist.location}
            </li>
            <li className="bio">
                {this.props.selectedArtist.artist.bio}
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default SelectedArtistInfo;