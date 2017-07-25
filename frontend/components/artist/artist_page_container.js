import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchAlbums, clearAlbums } from '../../actions/album_actions';
import { updateUser, fetchUser } from '../../actions/user_actions';
import ArtistPage from './artist_page';
import { allAlbums } from '../../reducers/selectors';

const mapStateToProps = ({ albums, session, loading, userProfile }) => ({
  currentUser: session.currentUser,
  albums: allAlbums(albums),
  loading: loading.indexLoading,
  userProfile: userProfile
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: (user) => dispatch(fetchAlbums(user)),
  updateUser: (user) => dispatch(updateUser(user)),
  fetchUser: (user) => dispatch(fetchUser(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistPage));
