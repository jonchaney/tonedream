import { receiveCurrentUser } from './session_actions';
import * as APIUtil from '../util/user_api_util';

export const UPDATE_ARTIST = "UPDATE_ARTIST";

export const updateUser = (user) => (dispatch) => {
  dispatch(updatingArtist);
  return APIUtil.updateUser(user).then(
    response => dispatch(receiveCurrentUser(response))
  );
};

export const updatingArtist = () => ({
  type: UPDATE_ARTIST
});