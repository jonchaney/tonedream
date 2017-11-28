import { connect } from 'react-redux';
import { updateArtist, createArtist } from '../../actions/artist_actions';
import { clearArtistErrors } from '../../actions/error_actions';
import { withRouter } from 'react-router';

import ArtistForm from './artist_form';

const mapStateToProps = ({ session, artists }) => ({
  currentUser: session.currentUser,
  errors: artists.errors
});

const mapDispatchToProps = dispatch => ({
  updateArtist: (user) => dispatch(updateArtist(user)),
  createArtist: (user) => dispatch(createArtist(user)),
  clearArtistErrors: () => dispatch(clearArtistErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistForm));