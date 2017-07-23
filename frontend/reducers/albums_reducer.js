import merge from 'lodash/merge';

import {
  RECEIVE_ALBUM,
  RECEIVE_ALBUMS,
  CLEAR_ALBUMS
} from '../actions/album_actions';

const defaultState = {
  selectedAlbum: {
    title: null,
    date: null,
    Album_id: null,
    genre: null,
    image_url: null
  },
  allAlbums: {
    0: {
      title: null,
      date: null,
      id: null,
      image_url: null,
      genre: null
    }
  }
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALBUMS:
      return merge({}, state, { allAlbums: action.albums});
    case RECEIVE_ALBUM:
      const newAlbum = { [action.album.id]: action.album };
      return merge({}, state, { selectedAlbum: action.album });
    case CLEAR_ALBUMS:
      return {};
    default:
      return state;
  }
};

export default SessionReducer;
