import { connect } from 'react-redux';
import {
  fetchAlbums,
  createAlbum,
  fetchAlbum,
  receiveAlbum,
  deleteAlbum,
  updateAlbum
} from '../../actions/album_actions';

import {
  deleteTrack,
  updateTrack,
  createTrack,
  fetchSelectedTrack
} from '../../actions/track_actions';

import TrackIndex from './track_index';

const mapStateToProps = ({ albums, session, loading, tracks }) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser,
  selectedAlbum: albums.selectedAlbum,
  selectedTrack: tracks.selectedTrack,
  tracks: albums.selectedAlbum.tracks,
  loading: loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: (album) => dispatch(updateAlbum(album)),
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