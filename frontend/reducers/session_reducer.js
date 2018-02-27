import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/sessionActions';

const nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser
      });
    case RECEIVE_ERRORS:
      const newErrors = action.errors;
      return merge({}, {currentUser: state.currentUser}, {
        errors: newErrors
      });
    case CLEAR_ERRORS:
      return merge({}, {currentUser: state.currentUser}, {
        errors: []
      });
    default:
      return state;
  }
};

export default SessionReducer;
