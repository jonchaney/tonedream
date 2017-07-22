import { connect } from 'react-redux';
import { fetchAlbums, 
         createAlbum, 
         fetchAlbum,
         deleteAlbum } from '../../actions/album_actions';
import { updateUser } from '../../actions/user_actions';
import { allAlbums } from '../../reducers/selectors';

import AlbumIndex from './album_index';

const mapStateToProps = ({ albums, session }) => ({ 
  currentUser: session.currentUser,
  errors: session.errors,
  albums: allAlbums(albums)
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  createAlbum: (album) => dispatch(createAlbum(album)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
