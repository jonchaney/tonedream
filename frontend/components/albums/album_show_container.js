import { connect } from 'react-redux';
import { fetchAlbum, clearAlbums } from '../../actions/album_actions';
import { fetchUser, updatingArtist, updateUserProfile } from '../../actions/user_actions';
import { fetchTracks } from '../../actions/track_actions';
import AlbumShow from './album_show';
import { allAlbums } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = ({ albums, session, loading, selectedArtist }) => ({
  currentUser: session.currentUser,
  albums: allAlbums(albums),
  artistLoading: loading.artistLoading,
  selectedAlbum: albums.selectedAlbum,
  selectedArtist: selectedArtist
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: (user) => dispatch(fetchAlbum(user)),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchTracks: () => dispatch(fetchTracks()),
  clearAlbums: () => dispatch(clearAlbums())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow));
