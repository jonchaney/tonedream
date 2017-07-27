import merge from 'lodash/merge';

import {
  RECEIVE_ALBUM,
  RECEIVE_ALBUMS,
  CLEAR_ALBUMS,
  CLEAR_ALBUM
} from '../actions/album_actions';

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
  ]
};

const AlbumsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return merge({}, state, { allAlbums: action.albums});
    case RECEIVE_ALBUM:
      // needs a refactor of state shape
      // return Object.assign({}, {selectedAlbum: { [action.album.id]: action.album }});
      newState.selectedAlbum = action.album;
      return merge({}, newState);
    case CLEAR_ALBUMS:
      return defaultState;
    case CLEAR_ALBUM:
      return defaultState;
    default:
      return state;
  }
};

export default AlbumsReducer;
