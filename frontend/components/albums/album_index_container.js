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
  albums: allAlbums(albums),
  selectedAlbum: albums.selectedAlbum,
  indexLoading: loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  startLoadingSingleAlbum: (album) => dispatch(startLoadingSingleAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
