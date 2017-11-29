import { connect } from 'react-redux';
import { updateArtist, clearArtist } from '../../actions/artist_actions';
import { clearArtistErrors } from '../../actions/error_actions';
import { withRouter } from 'react-router';

import EditArtistForm from './edit_artist_form';

const mapStateToProps = ({ session, artists }) => ({
  artist: artists.selectedArtist,
  errors: artists.errors
});

const mapDispatchToProps = dispatch => ({
  updateArtist: (user) => dispatch(updateArtist(user)),
  clearArtistErrors: () => dispatch(clearArtistErrors()),
  clearArtist: () => dispatch(clearArtist())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditArtistForm));
