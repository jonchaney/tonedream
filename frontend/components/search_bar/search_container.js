import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { search, clearResults } from '../../actions/search_actions';
import { clearErrors } from '../../actions/error_actions';
import { receiveCurrentUser } from '../../actions/session_actions';
import { resultsArray } from '../../reducers/selectors';
import Search from './search';

function mapStateToProps(state) {
  return ({
    errors: state.errors,
    results: resultsArray(state.search.results),
    currentUser: state.session.currentUser
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  return ({
    dispatch,
    logout: () => dispatch(logout()),
    search: (query) => dispatch(search(query)),
    clearResults: () => dispatch(clearResults())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);