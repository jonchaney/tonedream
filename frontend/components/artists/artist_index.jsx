import React from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistIndex extends React.Component {

  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const { artists } = this.props;
    return (

      <div className="artist-index">
        {/* <h3>ARTISTS</h3> */}
        <ul className="artist-index-list">
          {artists.map(artist => <ArtistIndexItem key={artist.id} artist={artist} />)}
        </ul>
      </div>

    );
  }
}


export default ArtistIndex;