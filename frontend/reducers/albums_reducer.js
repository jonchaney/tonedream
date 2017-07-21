import merge from 'lodash/merge';

import {
  RECEIVE_ALBUM,
  RECEIVE_ALBUMS,
  REQUEST_ALBUMS,
  REQUEST_ALBUM,
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
  // Object.freeze(state)
  // switch (action.type) {
  //   case RECEIVE_ALBUM:

  //     const currentAlbum = action.currentAlbum;
  //     return merge({}, nullAlbum, {
  //       currentAlbum
  //     });

  //   case RECEIVE_ALBUMS:
  //     const newErrors = action.errors;
  //     return merge({}, nullAlbum, {
  //       newErrors
  //     });
  //   case REQUEST_ALBUMS:
  //     return merge({}, state, {
  //       errors: []
  //     });
  //   case REQUEST_ALBUM:
  //     return merge({}, state, {
  //       errors: []
  //     });
  //   default:
  //     return state;
  // }
};

export default SessionReducer;
