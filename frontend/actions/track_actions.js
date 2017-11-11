import * as APIUtil from '../util/track_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const CLEAR_TRACK = "CLEAR_TRACK";
export const CLEAR_TRACKS = "CLEAR_TRACKS";
export const RECEIVE_SELECTED_TRACK = "RECEIVE_SELECTED_TRACK";
export const START_LOADING_TRACKS = "START_LOADING_TRACKS";
export const RECEIVE_SINGLE_TRACK = "RECEIVE_SINGLE_TRACK";
export const START_LOADING_TRACK = "START_LOADING_TRACK";
export const RECEIVE_LOADED_TRACK = "RECEIVE_LOADED_TRACK";
export const PAUSE_PLAY_TRACK = "PAUSE_PLAY_TRACK";

// action creators

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const playPauseTrack = () => ({
  type: PAUSE_PLAY_TRACK
});

export const receiveSelectedTrack = track => ({
  type: RECEIVE_SELECTED_TRACK,
  track
});

export const receiveSingleTrack = track => ({
  type: RECEIVE_SINGLE_TRACK,
  track
});

export const startLoadingTracks = () => ({
  type: START_LOADING_TRACKS,
});

export const receiveLoadedTrack = () => ({
  type: RECEIVE_LOADED_TRACK,
});

export const startLoadingTrack = () => ({
  type: START_LOADING_TRACK,
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
    dispatch(receiveSingleTrack(track));
    dispatch(receiveTrack(track));
  });
};

export const fetchSelectedTrack = trackId => dispatch => {
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

