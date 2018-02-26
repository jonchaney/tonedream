import React from 'react';
import { Link } from 'react-router-dom';
// import LoadingIcon from '../presentationals/loadingIcon.js';
import ReactLoading from 'react-loading';

class FeaturedArtists extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFeatured();
  }

  render() {
    return (
      this.props.loading ?
      <div className="loading-icon">
        <ReactLoading type="bubbles" color="gray"/>
      </div> :
      <div className="featured-container">
        <div className="featured">
          <article>
            <h2>FEATURED ARTISTS</h2>
          </article>
          {this.props.featured.map((artist, idx) =>
            <div key={idx}>
              <Link to={`./artists/${artist.id}`}>
                <img src={artist.image_url} />
              </Link>
            </div>
          )}
          </div>
        </div>
    );
  }
}

export default FeaturedArtists;
