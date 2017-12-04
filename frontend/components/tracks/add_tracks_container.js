import { connect } from 'react-redux';
import { createTrack, addTracks } from '../../actions/audio_player_actions';
import AddTracks from './add_tracks';


const mapStateToProps = ({ artists, albums, session, loading }) => ({
  currentUser: session.currentUser,
  selectedAlbum: albums.selectedAlbum,
  selectedArtist: albums.selectedArtist
});

const mapDispatchToProps = dispatch => ({
  createTrack: (track) => dispatch(createTrack(track)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTracks);