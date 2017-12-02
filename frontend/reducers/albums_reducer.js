import merge from 'lodash/merge';

import {
  RECEIVE_ALBUM,
  RECEIVE_ALBUMS,
  CLEAR_ALBUMS,
  CLEAR_ALBUM,
  RECEIVE_ALBUM_ERRORS,
  CLEAR_ALBUM_ERRORS
} from '../actions/album_actions';

import {
  fetchUser
} from '../actions/user_actions';

const defaultState = {
  selectedAlbum: {
      title: null,
      date: null,
      genre: null,
      image_url: null,
      id: null,
      tracks: null
  },
  allAlbums: [
    {
      title: null,
      date: null,
      id: null,
      image_url: null,
      genre: null,
      tracks: null
    }
  ],
  errors: []
};

const AlbumsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALBUMS:
      newState.allAlbums = action.albums;
      return newState;
    case RECEIVE_ALBUM:
      newState.selectedAlbum = action.album;
      return merge({}, newState);
    case CLEAR_ALBUMS:
      newState.allAlbums = defaultState.allAlbums;
      return newState;
    case CLEAR_ALBUM:
      newState.selectedAlbum = defaultState.selectedAlbum;
      return newState;
    case RECEIVE_ALBUM_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_ALBUM_ERRORS:
      newState.errors = defaultState.errors;
      return newState;
    default:
      return state;
  }
};

export default AlbumsReducer;
