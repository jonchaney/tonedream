import merge from 'lodash/merge';

import {
  RECEIVE_USER,
} from '../actions/user_actions';

const nullUser = {
  band: null,
  bio: null,
  image_url: null,
  location: null,
  username: null,
  errors: [],
};

const UserReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const artist = action.user;
      return merge({}, nullUser, 
        action.user
      );
    default:
      return state;
  }
};

export default UserReducer;