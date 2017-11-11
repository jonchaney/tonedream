import { connect } from 'react-redux';
import { fetchAlbums, clearAlbums } from '../../actions/album_actions';
import { updateUser, updatingArtist, updateUserProfile } from '../../actions/user_actions';
import { fetchTracks } from '../../actions/audio_player_actions';
import EditProfileForm from './edit_profile_form';
import { allAlbums } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = ({ albums, session, loading }) => ({
  currentUser: session.currentUser,
  albums: allAlbums(albums),
  loading: loading.detailLoading,
  selectedAlbum: albums.selectedAlbum
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
  updateUserProfile: (user, id) => dispatch(updateUserProfile(user, id)),
  fetchTracks: () => dispatch(fetchTracks())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileForm));
