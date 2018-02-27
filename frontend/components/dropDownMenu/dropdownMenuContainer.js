import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../../actions/sessionActions.js'

import DropdownMenu from './dropdownMenu.js';

const mapStateToProps = ({ session, artists }) => ({
  currentUser: session.currentUser,
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownMenu));