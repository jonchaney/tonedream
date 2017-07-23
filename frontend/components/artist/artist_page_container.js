import { connect } from 'react-redux';
import { fetchAlbums, clearAlbums } from '../../actions/album_actions';
import { updateUser } from '../../actions/user_actions';
import ArtistPage from './artist_page';
import { allAlbums } from '../../reducers/selectors';

const mapStateToProps = ({ albums, session, loading }) => ({
  currentUser: session.currentUser,
  albums: allAlbums(albums),
  loading: loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: (user) => dispatch(fetchAlbums(user)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistPage);
