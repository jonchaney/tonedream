import { connect } from 'react-redux';
import { fetchAlbums, 
         createAlbum, 
         fetchAlbum,
         deleteAlbum } from '../../actions/album_actions';
import { allAlbums } from '../../reducers/selectors';

import AlbumIndex from './album_index';

const mapStateToProps = ({ albums, session, loading, fetchedUser }) => ({ 
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser,
  errors: session.errors,
  albums: allAlbums(albums),
  loading: loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  createAlbum: (album) => dispatch(createAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
