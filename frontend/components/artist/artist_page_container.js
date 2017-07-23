import { connect } from 'react-redux';
import { fetchArtist, clearArtist } from '../../actions/artist_actions';
import { fetchAllAlbums, clearAlbums } from '../../actions/album_actions';
import { updateUser } from '../../actions/user_actions';
// import EditProfileForm from '../profile_form/edit_profile_form';
import AlbumIndex from '../albums/album_index';
import ArtistPage from './artist_page';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistPage);
