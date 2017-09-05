import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    this.props.getFeatured(6).then(() => {
      this.setState({ show: true });
    });
  }

  render() {
    if (!this.state.show) {
      return (
        <p>Loading...</p>
      );
    } else {
      return (
        <div className="featured-wrapper">
          <ul className="featured-artist">
            {this.props.featured.map((artist, idx) =>
              <li key={idx}>
                <img className="featured-pic" src={artist.image_url} />
                <Link to={`./${artist.id}`}>{artist.name}</Link>
              </li>
            )}
          </ul>
        </div>
      );
    }
  }
}

export default Home;
