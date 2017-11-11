import merge from 'lodash/merge';
import { assign } from 'lodash';

import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  RECEIVE_SELECTED_TRACK,
  CLEAR_TRACKS,
  CLEAR_TRACK,
  PAUSE_PLAY_TRACK,
  FETCH_SELECTED_ALBUM
} from '../actions/audio_player_actions';

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
        title: null,
        audio_url: null,
        id: null,
        user_id: null,
        album_id: null,
        track_num: null,
        download: null,
        duration: null,
        tracks: []
    },
    trackStatus: {
      playing: false,
      loop: false,
      shuffle: false,
      mute: false  
    }
};

const TracksReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      return merge({}, state, { selectedTracks: action.tracks });
    case PAUSE_PLAY_TRACK:
      let play = true;
      console.log(state.trackStatus.playing)
      if (state.trackStatus.playing) {
        play = false;
      }
      return merge({}, state, { trackStatus: { playing: play } });
    case RECEIVE_TRACK:
      return merge({}, state, { selectedTrack: action.track });
    case CLEAR_TRACKS:
      return defaultState;
    case CLEAR_TRACK:
      return defaultState;
    case FETCH_SELECTED_ALBUM:
      newState.selectedAlbum = action.album;
      return newState;
      default:
      return state;
  }
};

export default TracksReducer;