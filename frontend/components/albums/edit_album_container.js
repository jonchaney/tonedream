import { connect } from 'react-redux';
import { fetchAlbums, clearAlbums, updateFormAlbum } from '../../actions/album_actions';
import { allAlbums } from '../../reducers/selectors';
import { withRouter } from 'react-router';

import EditAlbum from './edit_album';

const mapStateToProps = ({ albums, session, loading }) => ({
  currentUser: session.currentUser,
  albums: allAlbums(albums),
  selectedAlbum: albums.selectedAlbum
});

const mapDispatchToProps = dispatch => ({
  updateFormAlbum: (formData, id) => dispatch(updateFormAlbum(formData, id)),
  fetchAlbums: (user) => dispatch(fetchAlbums(user)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAlbum));