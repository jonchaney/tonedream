import { connect } from 'react-redux';

import EditPage from './edit_page';

import { fetchArtists, fetchArtist, clearArtist } from '../../actions/artist_actions';
import { fetchAlbums, fetchAlbum } from '../../actions/album_actions';
import { selectAllArtists, allAlbums } from '../../reducers/selectors';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  artists: selectAllArtists(state.artists),
  albums: allAlbums(state.albums),
  selectedArtist: state.artists.selectedArtist
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  fetchAlbums: (id) => dispatch(fetchAlbums(id)),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  clearArtist: (id) => dispatch(clearArtist()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
