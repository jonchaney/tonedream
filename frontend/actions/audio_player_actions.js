import * as APIUtil from '../util/track_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const CLEAR_TRACK = "CLEAR_TRACK";
export const CLEAR_TRACKS = "CLEAR_TRACKS";
export const PAUSE_PLAY_TRACK = "PAUSE_PLAY_TRACK";
export const MERGE_SELECTED_ALBUM = "MERGE_SELECTED_ALBUM";
export const MERGE_SELECTED_TRACK = "MERGE_SELECTED_TRACK";

// action creators

// merge album data with audio_player state 
export const mergeSelectedAlbum = album => ({
  type: MERGE_SELECTED_ALBUM,
  album
});

// merge playing track data with audio_player state 
export const mergeSelectedTrack = track => ({
  type: MERGE_SELECTED_TRACK,
  track
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const playPauseTrack = () => ({
  type: PAUSE_PLAY_TRACK
});

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const clearTracks = () => ({
  type: CLEAR_TRACKS
});

export const clearTrack = () => ({
  type: CLEAR_TRACK
});

// think action creators 

export const fetchTrack = trackId => dispatch => {
  return APIUtil.fetchTrack(trackId).then(track => {
    dispatch(receiveTrack(track));
  });
};

export const fetchTracks = () => dispatch => {
  return APIUtil.fetchTracks().then(tracks => {
    dispatch(receiveTracks(tracks));
  }, errors => (
    dispatch(receiveErrors(errors))
  ));
};

export const createTrack = track => dispatch => (
  APIUtil.createTrack(track).then(track => {
    dispatch(receiveTrack(track));
  }, errors => (
    dispatch(receiveErrors(errors))
  ))
);

export const deleteTrack = id => dispatch => (
  APIUtil.deleteTrack(id)
);

export const updateTrack = track => dispatch => (
  APIUtil.updateTrack(track).then(track => {
    dispatch(receiveTrack(track));
  }, errors => (
    dispatch(receiveErrors(errors))
  ))
);

export const updateFormTrack = (formData, id) => (dispatch) => {
  return APIUtil.updateFormTrack(formData, id).then(
    response => dispatch(receiveTrack(response))
  );
};

export const addTrack = (formData) => (dispatch) => {
  return APIUtil.addTrack(formData).then(
    response => dispatch(receiveTrack(response))
  );
};

