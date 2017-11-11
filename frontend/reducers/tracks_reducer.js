import merge from 'lodash/merge';
import { assign } from 'lodash';

import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  RECEIVE_SELECTED_TRACK,
  CLEAR_TRACKS,
  CLEAR_TRACK,
  PAUSE_PLAY_TRACK
} from '../actions/track_actions';

const defaultState = {
  playlist: {
    0: {
      title: null,
      audio_url: null,
      id: null,
      user_id: null,
      album_id: null,
      track_num: null,
      download: null,
      duration: null
    }
  },
    selectedTrack: {
      title: null,
      audio_url: null,
      id: null,
      user_id: null,
      album_id: null,
      track_num: null,
      download: null,
      duration: null
    },
    selectedAlbum: {
      0: {
        title: null,
        audio_url: null,
        id: null,
        user_id: null,
        album_id: null,
        track_num: null,
        download: null,
        duration: null
      }
    },
    trackStatus: false
};

const TracksReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      return merge({}, state, { selectedTracks: action.tracks });
    case PAUSE_PLAY_TRACK:
      let play = true;
      if (state.trackStatus) {
        play = false;
      }
      return merge({}, state, { trackStatus: play });
    case RECEIVE_TRACK:
      return merge({}, state, { selectedTrack: action.track });
    case CLEAR_TRACKS:
      return defaultState;
    case CLEAR_TRACK:
      return defaultState;
    default:
      return state;
  }
};

export default TracksReducer;