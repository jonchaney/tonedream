import { RECEIVE_USERS, 
         RECEIVE_USER,
         RECEIVE_UPDATED_USER,
         START_LOADING_FETCH_USER,
         RECEIVE_FETCHED_USER } from '../actions/user_actions';
         
import merge from 'lodash/merge';

const defaultState = {
  userProfile: {},
  allUsers: {}
};

const UsersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge( {}, state, { allUsers: action.users });
    case RECEIVE_USER:
      return merge({}, state, { allUsers: action.user });
    default:
      return state;
  }
};

export default UsersReducer;
