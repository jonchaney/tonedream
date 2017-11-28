import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedArtist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFeatured();
  }

  render() {
    if (!this.props.featured) {
      return (
        <p>Loading...</p>
      );
    } else {
      return (
        <div className="featured-wrapper">
          <h3>FEATURED ARTISTS</h3>
          <div className="featured-artist">
            {this.props.featured.map((artist, idx) =>
              <div key={idx}>
                <img className="featured-pic" src={artist.image_url} />
                <Link to={`./artists/${artist.id}`}>{artist.name}</Link>
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}

export default FeaturedArtist;
