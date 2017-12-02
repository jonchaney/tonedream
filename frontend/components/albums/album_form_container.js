import { connect } from 'react-redux';
import { updateAlbum, createAlbum, clearAlbumErrors } from '../../actions/album_actions';
import { withRouter } from 'react-router';

import AlbumForm from './album_form';

const mapStateToProps = ({ session, albums, artists }) => ({
  currentUser: session.currentUser,
  selectedArtist: artists.selectedArtist,
  errors: albums.errors
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: (user) => dispatch(updateAlbum(user)),
  createAlbum: (user) => dispatch(createAlbum(user)),
  clearAlbumErrors: () => dispatch(clearAlbumErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumForm));