import { receiveCurrentUser } from './session_actions';
import * as APIUtil from '../util/user_api_util';

export const updateUser = (user) => (dispatch) => {
  return APIUtil.updateUser(user).then(
    response => dispatch(receiveCurrentUser(response))
  );
};