import { connect } from 'react-redux';
import { updateUser, updateProfile } from '../../actions/user_actions';
import { clearErrors } from '../../actions/error_actions';
import { withRouter } from 'react-router';

import EditUserForm from './editUserForm.js';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user, id) => dispatch(updateUser(user, id)),
  updateProfile: (formData, id) => dispatch(updateProfile(formData, id)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserForm));
