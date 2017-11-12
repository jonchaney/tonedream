import merge from 'lodash/merge';
import { assign } from 'lodash';

import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  RECEIVE_SELECTED_TRACK,
  CLEAR_TRACKS,
  CLEAR_TRACK,
  PLAY_TRACK,
  PAUSE_TRACK,
  MUTE_TRACK,
  SHUFFLE,
  LOOP_ALBUM,
  LOOP_SONG,
  MERGE_SELECTED_ALBUM,
  MERGE_SELECTED_TRACK,
  MERGE_SELECTED_ARTIST
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
      loopSong: false,
      loopAlbum: false,
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
    case PLAY_TRACK:
      return merge({}, state, { trackStatus: { playing: true } });
    case PAUSE_TRACK:
      return merge({}, state, { trackStatus: { playing: false } });
    case SHUFFLE:
      let shuffle = newState.trackStatus.shuffle;
      if (shuffle) {
        shuffle = false;
      } else {
        shuffle = true;
      }
      return merge({}, state, { trackStatus: { shuffle: shuffle } });
    case LOOP_ALBUM:
      let loopAlbum = newState.trackStatus.loopAlbum;
      if (loopAlbum) {
        loopAlbum = false;
      } else {
        loopAlbum = true;
      }
      return merge({}, state, { trackStatus: { loopAlbum: loopAlbum } });
    case LOOP_SONG:
      let loopSong = newState.trackStatus.loopSong;
      if (loopSong) {
        loopSong = false;
      } else {
        loopSong = true;
      }
      return merge({}, state, { trackStatus: { loopSong: loopSong } });
    case MUTE_TRACK:
      let mute = newState.trackStatus.mute;
      if (mute) {
        mute = false;
      } else {
        mute = true;
      }
      return merge({}, state, { trackStatus: { mute: mute } });
    case RECEIVE_TRACK:
      return merge({}, state, { selectedTrack: action.track });
    case CLEAR_TRACKS:
      return defaultState;
    case CLEAR_TRACK:
      return merge({}, state, { selectedTrack: defaultState.selectedTrack });
    case MERGE_SELECTED_ALBUM:
      newState.selectedAlbum = action.album;
      return newState;
    case MERGE_SELECTED_TRACK:
      newState.selectedTrack = action.track;
      return newState;
    case MERGE_SELECTED_ARTIST:
      newState.selectedArtist= action.artist;
      return newState;
    default:
    return state;
  }
};

export default TracksReducer;