import { connect } from 'react-redux';
import { createTrack, addTrack } from '../../actions/track_actions';
import AddTrack from './add_track';


const mapStateToProps = ({ albums, session, loading }) => ({
  currentUser: session.currentUser,
  selectedAlbum: albums.selectedAlbum
});

const mapDispatchToProps = dispatch => ({
  createTrack: (track) => dispatch(createTrack(track)),
  addTrack: (formData) => dispatch(addTrack(formData))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTrack);