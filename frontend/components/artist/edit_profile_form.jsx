import React from 'react';
import { Link } from 'react-router';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="profile-form-container">
          <p>{this.props.currentUser}</p>
        </div>
      );
  }
}

export default AlbumIndex;