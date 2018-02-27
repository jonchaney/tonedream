import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { logout, login } from '../../actions/sessionActions';
import AltHeader from './alt_header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AltHeader));
