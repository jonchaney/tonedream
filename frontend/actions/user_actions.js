import { receiveCurrentUser } from './session_actions';
import * as APIUtil from '../util/user_api_util';

export const UPDATE_ARTIST = "UPDATE_ARTIST";
export const RECEIVE_UPDATED_USER = "RECEIVE_UPDATED_USER";

export const receiveUpdatedUser = (updatedUser) => {
  return {
    type: RECEIVE_UPDATED_USER,
    updatedUser: updatedUser
  };
};

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
