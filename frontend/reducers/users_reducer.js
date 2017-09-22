import merge from 'lodash/merge';

import {
  RECEIVE_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/user_actions';

const nullUser = {
  artist: null,
  errors: []
};

const UserReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const artist = action.user;
      return merge({}, nullUser, {
        artist
      });
    case RECEIVE_ERRORS:
      const newErrors = action.errors;
      return merge({}, nullUser, {
        errors: newErrors
      });
    case CLEAR_ERRORS:
      return merge({}, state, {
        errors: []
      });
    default:
      return state;
  }
};

export default UserReducer;