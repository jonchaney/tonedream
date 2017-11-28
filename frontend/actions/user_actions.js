import * as APIUtil from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';
import { receiveErrors, clearErrors } from './error_actions';

export const UPDATE_ARTIST = "UPDATE_ARTIST";
export const RECEIVE_UPDATED_USER = "RECEIVE_UPDATED_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const ARTIST_LOADING = "ARTIST_LOADING";
export const RECEIVE_LOADED_ARTIST = "RECEIVE_LOADED_ARTIST";

export const receiveUpdatedUser = (updatedUser) => {
  return {
    type: RECEIVE_UPDATED_USER,
    updatedUser: updatedUser
  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveLoadedArtist = () => ({
  type: RECEIVE_LOADED_ARTIST
});

export const updatingArtist = () => ({
  type: UPDATE_ARTIST
});

export const updateUserProfile = (formData, id) => (dispatch) => {
  return APIUtil.updateProfile(formData, id).then(
    response => dispatch(receiveCurrentUser(response))
  );
};

export const updateUser = user => dispatch => (
  // dispatch(updatingArtist);
  APIUtil.updateUser(user).then(response => {
    dispatch(receiveCurrentUser(response));
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

// export const login = user => dispatch => (
//   APIUtil.login(user).then(user => {
//     dispatch(receiveCurrentUser(user));
//   }, err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );

export const fetchUser = id => dispatch => {
  return APIUtil.getUser(id).then(
    response => dispatch(receiveUser(response))
  );
};
