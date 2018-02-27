import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import { search, clearResults } from '../../actions/search_actions';
import { clearErrors } from '../../actions/error_actions';
import { receiveCurrentUser } from '../../actions/sessionActions';
import { resultsArray } from '../../reducers/selectors';
import Search from './search';
import { withRouter } from 'react-router';
import { clearAlbums } from '../../actions/album_actions';

function mapStateToProps(state) {
  return ({
    errors: state.errors,
    results: resultsArray(state.search.results),
    currentUser: state.session.currentUser,
    artist: state.artists.selectedArtist
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  return ({
    dispatch,
    search: (query) => dispatch(search(query)),
    clearResults: () => dispatch(clearResults()),
    clearAlbums: () => dispatch(clearAlbums())
  });
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));