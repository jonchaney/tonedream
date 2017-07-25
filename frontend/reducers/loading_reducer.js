import {
  RECEIVE_ALBUM, 
  RECEIVE_ALBUMS, 
  REQUEST_ALBUM,
  REQUEST_ALBUMS, 
  CLEAR_ALBUMS,
  RECEIVE_NEW_ALBUM,
  RECEIVE_ALBUM_ERRORS,
  START_LOADING_ALL_ALBUMS,
  START_LOADING_SINGLE_ALBUM
} from '../actions/album_actions';

import UPDATE_ARTIST from '../actions/user_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false,
  artistLoading: false,
};

const LoadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_NEW_ALBUM:
    case RECEIVE_ALBUM:
      return Object.assign({}, state, { detailLoading: false });
    case UPDATE_ARTIST:
      return Object.assign({}, state, { artistLoading: true });
    case RECEIVE_ALBUM_ERRORS:
      return Object.assign({}, state, { detailLoading: false });
    case START_LOADING_ALL_ALBUMS:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_SINGLE_ALBUM:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};

export default LoadingReducer;