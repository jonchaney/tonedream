import { connect } from 'react-redux';
import { fetchAlbums, clearAlbums } from '../../actions/album_actions';
import { updateUser, updatingArtist, updateUserProfile } from '../../actions/user_actions';
import { fetchTracks } from '../../actions/audio_player_actions';
import SelectedArtistInfo from './selected_artist_info';
import { allAlbums } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = ({ albums, session, loading, artists }) => ({
  selectedArtist: artists.selectedArtist
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedArtistInfo));
