import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  receiveAlbum,
} from '../../actions/album_actions';

import {
  fetchSelectedTrack,
  clearTrack
} from '../../actions/track_actions';

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
    selectedArtist: selectedArtist
  };
};

const mapDispatchToProps = dispatch => ({
  receiveAlbum: (album) => dispatch(receiveAlbum(album)),
  fetchSelectedTrack: (track) => dispatch(fetchSelectedTrack(track)),
  clearTrack: () => dispatch(clearTrack())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex));