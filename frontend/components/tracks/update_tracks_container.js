import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateFormTracks } from '../../actions/track_actions'; 

import UpdateTracks from './edit_album';

const mapStateToProps = ({ albums, session, loading }) => ({
  currentUser: session.currentUser,
  selectedAlbum: albums.selectedAlbum,
  tracks: albums.selectedAlbum.tracks
});

const mapDispatchToProps = dispatch => ({
  updateFormTracks: (formData, id) => dispatch(updateFormTracks(formData, id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateTracks));