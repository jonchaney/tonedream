import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { logout, login } from '../../actions/sessionActions';
import Greeting from './greeting';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: {username: "slowcrawl", password: "password"}
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));
