import { connect } from 'react-redux';
import { getFeatured } from '../../actions/search_actions';
import { receiveAudio } from '../../actions/audio_player_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbum } from '../../actions/album_actions';
import { playTrack, pauseTrack } from '../../actions/audio_player_actions';

import { resultsArray } from '../../reducers/selectors';
import { selectAllTracks } from '../../reducers/selectors';

import FeaturedArtist from './featured_artist';

const mapStateToProps = (state) => ({
  featured: resultsArray(state.search.featured),
  currentUser: state.session.currentUser,
  artist: state.artists.selectedArtist,
  album: state.albums.selectedAlbum,
  tracks: selectAllTracks(state.albums.selectedAlbum.tracks),
  playing: state.audio_player.trackStatus.playing,
  playingAlbum: state.audio_player.selectedAlbum
});

const mapDispatchToProps = dispatch => ({
  getFeatured: (num) => dispatch(getFeatured(num)),
  receiveAudio: (album, artist, track) => dispatch(receiveAudio(album, artist, track)),
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  playTrack: () => dispatch(playTrack()),
  pauseTrack: () => dispatch(pauseTrack()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedArtist);
