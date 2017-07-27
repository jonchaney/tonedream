import merge from 'lodash/merge';
import { assign } from 'lodash';

import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  RECEIVE_SELECTED_TRACK,
  CLEAR_TRACKS,
  CLEAR_TRACK
} from '../actions/track_actions';

const defaultState = {
  selectedTracks: {
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
    }
};

const TracksReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      return merge({}, state, { selectedTracks: action.tracks });
    case RECEIVE_SELECTED_TRACK:
      console.log(action.track);
      newState[[action.track.id]] = action.track;
      return merge({}, state, { selectedTracks: newState });
    case RECEIVE_TRACK:
      newState.selectedTrack = action.track;
      return merge({}, newState);
    case CLEAR_TRACKS:
      return defaultState;
    case CLEAR_TRACK:
      return defaultState;
    default:
      return state;
  }
};

export default TracksReducer;