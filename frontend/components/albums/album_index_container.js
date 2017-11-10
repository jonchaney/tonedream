import { connect } from 'react-redux';
import { fetchAlbums, 
         createAlbum, 
         fetchAlbum,
         deleteAlbum,
         receiveAlbum,
         startLoadingSingleAlbum } from '../../actions/album_actions';
import { allAlbums } from '../../reducers/selectors';

import AlbumIndex from './album_index';

const mapStateToProps = ({ albums, session, loading }) => ({ 
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser,
  errors: session.errors,
  albums: allAlbums(albums),
  selectedAlbum: albums.selectedAlbum,
  indexLoading: loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  createAlbum: (album) => dispatch(createAlbum(album)),
  receiveAlbum: (album) => dispatch(receiveAlbum(album)),
  startLoadingSingleAlbum: (album) => dispatch(startLoadingSingleAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
