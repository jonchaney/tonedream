import { connect } from 'react-redux';
import { updateArtist, createArtist } from '../../actions/artist_actions';
import { clearErrors } from '../../actions/error_actions';
import { withRouter } from 'react-router';

import ArtistForm from './artist_form';

const mapStateToProps = ({ session, artists }) => ({
  currentUser: session.currentUser,
  errors: artists.errors
});

const mapDispatchToProps = dispatch => ({
  updateArtist: (user) => dispatch(updateArtist(user)),
  createArtist: (user) => dispatch(createArtist(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistForm));