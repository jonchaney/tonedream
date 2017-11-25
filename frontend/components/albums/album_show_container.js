import { connect } from 'react-redux';
import { fetchAlbum, clearAlbums } from '../../actions/album_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchTracks } from '../../actions/audio_player_actions';
import AlbumShow from './album_show';
import { allAlbums } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = ({ albums, session, loading, selectedArtist }) => ({
  currentUser: session.currentUser,
  albums: allAlbums(albums),
  selectedAlbum: albums.selectedAlbum,
  selectedArtist: selectedArtist,
  detailLoading: loading.detailLoading,
  artistLoading: loading.artistLoading
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: (user) => dispatch(fetchAlbum(user)),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  fetchTracks: () => dispatch(fetchTracks()),
  clearAlbums: () => dispatch(clearAlbums())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow));
