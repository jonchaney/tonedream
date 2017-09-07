import { connect } from 'react-redux';
import { fetchAlbums, clearAlbums } from '../../actions/album_actions';
import { fetchUser, updatingArtist, updateUserProfile } from '../../actions/user_actions';
import { fetchTracks } from '../../actions/track_actions';
import ArtistProfilePage from './artist_profile_page';
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
  fetchAlbums: (user) => dispatch(fetchAlbums(user)),
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchTracks: () => dispatch(fetchTracks())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistProfilePage));