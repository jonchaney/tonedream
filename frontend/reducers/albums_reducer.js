import merge from 'lodash/merge';

import {
  RECEIVE_ALBUM,
  RECEIVE_ALBUMS,
  CLEAR_ALBUMS
} from '../actions/album_actions';

const defaultState = {
  selectedAlbum: {
    title: null,
    date: 'Mon, 01 Jan - 4712',
    Album_id: null,
    genre: null,
    art_work_url: null
  },
  allAlbums: {
    0: {
      title: null,
      date: 'Mon, 01 Jan - 4712',
      Album_id: null,
      genre: null,
      art_work_url: null
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
    default:
      return state;
  }
};

export default SessionReducer;
