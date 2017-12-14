import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedArtist extends React.Component {
  constructor(props) {
    super(props);
  }

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

  renderPlayOrPause() {
    if (this.props.playing && this.props.playingAlbum.title === "Satan's Gulch") {
      return (
        <p>
          <i onClick={() => this.props.pauseTrack()} className="fa fa-pause" aria-hidden="true"></i>
        </p>
      );
    } else {
      return (
        <p>
          <i onClick={() => this.props.playTrack()} className="fa fa-play" aria-hidden="true"></i>
        </p>
      );
    }
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
            <section> 
              <img src={this.props.album.image_url} />
              <article>
                <Link to={`/albums/${this.props.album.id}`}>
                    <section>
                      <p>{this.props.album.title}</p>
                      <p>by {this.props.artist.name}</p>
                    </section>
                </Link>
                <section>
                  <p className="album-of-day">ALBUM OF THE DAY</p>
                </section>
              </article>
              <section className="play-button">
                {this.renderPlayOrPause()}
              </section>
            </section>
            {/* {this.props.featured.map((artist, idx) =>
              <section key={idx}>
                      <img src={artist.image_url} />
                      <article>
                         <Link to={`./artists/${artist.id}`}>
                            <section>
                              <p>{artist.name}</p>
                            </section>
                         </Link>
                      </article>
              </section>
            )} */}
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