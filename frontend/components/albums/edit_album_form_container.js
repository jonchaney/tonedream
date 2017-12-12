import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchAlbums, clearAlbums, updateAlbum, clearAlbum } from '../../actions/album_actions';
import { clearArtist } from '../../actions/artist_actions';
import { allAlbums } from '../../reducers/selectors';
import { createTrack } from '../../actions/track_actions';


import EditAlbumForm from './edit_album_form';

const mapStateToProps = ({ artists, albums, session, loading }) => ({
  currentUser: session.currentUser,
  albums: allAlbums(albums),
  selectedAlbum: albums.selectedAlbum,
  errors: albums.errors,
  selectedArtist: artists.selectedArtist
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: (artistId, albumId, album) => dispatch(updateAlbum(artistId, albumId, album)),
  fetchAlbums: (user) => dispatch(fetchAlbums(user)),
  clearArtist: () => dispatch(clearArtist()),
  clearAlbum: () => dispatch(clearAlbum()),
  createTrack: (track) => dispatch(createTrack(track))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAlbumForm));