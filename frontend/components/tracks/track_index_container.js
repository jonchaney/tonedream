import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  receiveAlbum,
} from '../../actions/album_actions';

import {
  mergeSelectedTrack,
  clearTrack,
  playPauseTrack,
  mergeSelectedAlbum
} from '../../actions/audio_player_actions';

import { selectAllTracks } from '../../reducers/selectors';

import TrackIndex from './track_index';

const mapStateToProps = ({ albums, session, loading, audio_player, selectedArtist }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    selectedAlbum: albums.selectedAlbum,
    selectedTrack: audio_player.selectedTrack,
    tracks: selectAllTracks(albums.selectedAlbum.tracks),
    loading: loading.indexLoading,
    selectedArtist: selectedArtist,
    playing: audio_player.trackStatus.playing
  };
};

const mapDispatchToProps = dispatch => ({
  receiveAlbum: (album) => dispatch(receiveAlbum(album)),
  mergeSelectedTrack: (id) => dispatch(mergeSelectedTrack(id)),
  clearTrack: () => dispatch(clearTrack()),
  playPauseTrack: () => dispatch(playPauseTrack()),
  mergeSelectedAlbum: (album) => dispatch(mergeSelectedAlbum(album))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex));