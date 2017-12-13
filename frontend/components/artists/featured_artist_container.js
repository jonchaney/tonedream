import { connect } from 'react-redux';
import { getFeatured } from '../../actions/search_actions';
import { receiveAudio } from '../../actions/audio_player_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbum } from '../../actions/album_actions';
import { playTrack } from '../../actions/audio_player_actions';

import { resultsArray } from '../../reducers/selectors';
import { selectAllTracks } from '../../reducers/selectors';

import FeaturedArtist from './featured_artist';

const mapStateToProps = (state) => ({
  featured: resultsArray(state.search.featured),
  currentUser: state.session.currentUser,
  artist: state.artists.selectedArtist,
  album: state.albums.selectedAlbum,
  tracks: selectAllTracks(state.albums.selectedAlbum.tracks)
});

const mapDispatchToProps = dispatch => ({
  getFeatured: (num) => dispatch(getFeatured(num)),
  receiveAudio: (album, artist, track) => dispatch(receiveAudio(album, artist, track)),
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  playTrack: () => dispatch(playTrack()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedArtist);
