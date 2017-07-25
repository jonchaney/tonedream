import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const START_LOADING_FETCH_USER = 'START_LOADING_FETCH_USER';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user: user
  };
};

export const startLoadingFetchUser = () => {
  return {
    type: START_LOADING_FETCH_USER
  };
};

export const updateUser = (user) => (dispatch) => {
  return APIUtil.updateUser(user).then(
    response => dispatch(receiveUser(response))
  );
};

export const fetchUser = (id) => (dispatch) => {
  dispatch(startLoadingFetchUser());
  return APIUtil.fetchUser(id).then(
    user => dispatch(receiveUser(user))
  );
};