import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ArtistShow from './artistShow';

import { allAlbums } from '../../reducers/selectors';

import { fetchAlbums, clearAlbums } from '../../actions/album_actions';
import { fetchUser, updatingArtist, updateUserProfile } from '../../actions/user_actions';
import { fetchArtist} from '../../actions/artist_actions';
import { fetchTracks } from '../../actions/audio_player_actions';

const mapStateToProps = ({ albums, session, loading, artists }) => ({
  albums: allAlbums(albums),
  artistLoading: loading.artistLoading,
  artist: artists.selectedArtist
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: (user) => dispatch(fetchAlbums(user)),
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  clearAlbums: () => dispatch(clearAlbums())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistShow));
