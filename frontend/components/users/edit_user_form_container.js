import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import { clearErrors } from '../../actions/error_actions';
import { withRouter } from 'react-router';

import EditUserForm from './edit_user_form';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserForm));
