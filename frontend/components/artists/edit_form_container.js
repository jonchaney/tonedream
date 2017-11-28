import { connect } from 'react-redux';
import { fetchAlbums, clearAlbums } from '../../actions/album_actions';
import { updateUser, updatingArtist, updateUserProfile } from '../../actions/user_actions';
import { fetchTracks } from '../../actions/audio_player_actions';
import { clearErrors } from '../../actions/error_actions';
import EditForm from './edit_form';
import { allAlbums } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
  updateUserProfile: (user, id) => dispatch(updateUserProfile(user, id)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm));
