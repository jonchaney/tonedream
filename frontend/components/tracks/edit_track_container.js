import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateFormTrack, fetchSelectedTrack } from '../../actions/track_actions'; 

import EditTrack from './edit_track';

const mapStateToProps = ({ albums, session, tracks, loading }, { match }) => {
 console.log(albums.selectedAlbum.tracks);
 console.log(match.params);
 return {
   currentUser: session.currentUser,
   selectedAlbum: albums.selectedAlbum,
   track: albums.selectedAlbum.tracks[match.params.id],
   loading: loading.detailLoading
 }; 
};

const mapDispatchToProps = dispatch => ({
  updateFormTrack: (formData, id) => dispatch(updateFormTrack(formData, id)),
  fetchSelectedTrack: (id) => dispatch(fetchSelectedTrack(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTrack);