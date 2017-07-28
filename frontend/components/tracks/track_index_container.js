import { connect } from 'react-redux';
import { withRoute } from 'react-router';
import {
  fetchAlbums,
  createAlbum,
  fetchAlbum,
  receiveAlbum,
  deleteAlbum,
  updateAlbum,
  updateFormAlbum,
} from '../../actions/album_actions';

import {
  deleteTrack,
  updateTrack,
  createTrack,
  fetchSelectedTrack
} from '../../actions/track_actions';

import { selectAllTracks } from '../../reducers/selectors';

import TrackIndex from './track_index';

const mapStateToProps = ({ albums, session, loading, tracks }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    currentUser: session.currentUser,
    selectedAlbum: albums.selectedAlbum,
    selectedTrack: tracks.selectedTrack,
    tracks: selectAllTracks(albums.selectedAlbum.tracks),
    loading: loading.indexLoading
  };
};

const mapDispatchToProps = dispatch => ({
  updateFormAlbum: (formData, id) => dispatch(updateFormAlbum(formData, id)),
  receiveAlbum: (album) => dispatch(receiveAlbum(album)),
  updateTrack: (track) => dispatch(updateTrack(track)),
  createTrack: (track) => dispatch(createTrack(track)),
  deleteTrack: (track) => dispatch(deleteTrack(track)),
  fetchSelectedTrack: (track) => dispatch(fetchSelectedTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);