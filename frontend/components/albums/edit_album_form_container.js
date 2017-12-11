import { connect } from 'react-redux';
import { fetchAlbums, clearAlbums, updateAlbum, clearAlbum } from '../../actions/album_actions';
import { clearArtist } from '../../actions/artist_actions';
import { allAlbums } from '../../reducers/selectors';
import { withRouter } from 'react-router';

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
  clearAlbum: () => dispatch(clearAlbum())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAlbumForm));