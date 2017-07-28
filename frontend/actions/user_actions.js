import { receiveCurrentUser } from './session_actions';
import * as APIUtil from '../util/user_api_util';

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

export const loadArtist = () => ({
  type: ARTIST_LOADING
});

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

export const updateUser = (user) => (dispatch) => {
  dispatch(updatingArtist);
  return APIUtil.updateUser(user).then(
    response => dispatch(receiveCurrentUser(response))
  );
};

export const fetchUser = id => dispatch => {
  return APIUtil.getUser(id).then(
    response => dispatch(receiveUser(response))
  );
};
