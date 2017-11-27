import { connect } from 'react-redux';
import { fetchAlbums, clearAlbums } from '../../actions/album_actions';
import { updateUser, updatingArtist, updateUserProfile } from '../../actions/user_actions';
import { fetchTracks } from '../../actions/audio_player_actions';
import EditForm from './edit_form';
import { allAlbums } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = ({ albums, session, loading }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
  updateUserProfile: (user, id) => dispatch(updateUserProfile(user, id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm));
