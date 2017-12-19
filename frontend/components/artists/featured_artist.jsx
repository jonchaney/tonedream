import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedArtist extends React.Component {
  constructor(props) {
    super(props);
  }
  // localhost artist 15
  // localhost album 354
  // heroku artist 1
  // heroku album 333
  componentDidMount() {
    this.props.getFeatured().then(() => {
      this.props.fetchArtist(15).then(() => {
        this.props.fetchAlbum(354).then(() => {
          if (!this.props.playing) {
            this.props.receiveAudio(this.props.album, this.props.artist, this.props.tracks[0]);
          }
          });
        });
    });
  }

  render() {
    if (!this.props.album.title) {
      return (
        <p>Loading...</p>
      );
    } else {
      return (
        <div className="featured-wrapper">
          <h3>FEATURED ARTISTS</h3>
          <main>
            <div> 
              <img src={this.props.album.image_url} />
              <article>
                    <section>
                      <article>
                <Link to={`/albums/${this.props.album.id}`}>
                        <p>{this.props.album.title}</p>
                </Link>
                        <p className="artist-name">by {this.props.artist.name}</p>
                      </article>
                  <p className="feature-type">ALBUM OF THE DAY</p>
                    </section>
              </article>
            </div>
            {this.props.featured.map((artist, idx) =>
              <div key={idx}>
                      <img src={artist.image_url} />
                      <article>
                            <section>
                         <Link to={`./artists/${artist.id}`}>
                              <p>{artist.name}</p>
                         </Link>
                              <p className="feature-type">FEATURE</p>
                            </section>
                      </article>
              </div>
            )}
          </main>
        </div>
      );
    }
  }
}

export default FeaturedArtist;


// return (
//   <div className="featured-wrapper">
//     <h3>FEATURED ARTISTS</h3>
    // <div className="featured-artist">
    //   {this.props.featured.map((artist, idx) =>
    //     <div key={idx}>
    //       <img className="featured-pic" src={artist.image_url} />
    //       <Link to={`./artists/${artist.id}`}>{artist.name}</Link>
    //     </div>
    //   )}
    // </div>
//   </div>