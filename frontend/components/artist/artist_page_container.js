import { connect } from 'react-redux';
import { fetchAlbums, clearAlbums } from '../../actions/album_actions';
import { updateUser, updatingArtist } from '../../actions/user_actions';
import ArtistPage from './artist_page';
import { allAlbums } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = ({ albums, session, loading }) => ({
  currentUser: session.currentUser,
  albums: allAlbums(albums),
  loading: loading.userLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: (user) => dispatch(fetchAlbums(user)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistPage));
