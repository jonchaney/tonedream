import { connect } from 'react-redux';
import { fetchAlbums, clearAlbums, updateAlbum } from '../../actions/album_actions';
import { allAlbums } from '../../reducers/selectors';
import { withRouter } from 'react-router';

import EditAlbumForm from './edit_album_form';

const mapStateToProps = ({ albums, session, loading }) => ({
  currentUser: session.currentUser,
  albums: allAlbums(albums),
  selectedAlbum: albums.selectedAlbum
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: (artistId, album) => dispatch(updateAlbum(album)),
  fetchAlbums: (user) => dispatch(fetchAlbums(user)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAlbumForm));