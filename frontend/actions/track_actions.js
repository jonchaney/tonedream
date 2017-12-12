import * as APIUtil from '../util/track_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const CLEAR_TRACK = "CLEAR_TRACK";
export const CLEAR_TRACKS = "CLEAR_TRACKS";
export const PAUSE_PLAY_TRACK = "PAUSE_PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";
export const PLAY_TRACK = "PLAY_TRACK";
export const MUTE_TRACK = "MUTE_TRACK";
export const SHUFFLE = "SHUFFLE_TRACK";
export const LOOP_ALBUM = "LOOP_ALBUM";
export const LOOP_SONG = "LOOP_SONG";
export const RECEIVE_AUDIO = "RECEIVE_AUDIO";

// action creators

export const receiveAudio = (album, artist, track) => ({
  type: RECEIVE_AUDIO,
  album,
  artist,
  track
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const playTrack = () => ({
  type: PLAY_TRACK
});

export const shuffle = () => ({
  type: SHUFFLE
});

export const pauseTrack = () => ({
  type: PAUSE_TRACK
});

export const muteTrack = () => ({
  type: MUTE_TRACK
});

export const loopAlbum = () => ({
  type: LOOP_ALBUM
});

export const loopSong = () => ({
  type: LOOP_SONG
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

export const addTracks = (artistId, albumId, tracks) => dispatch => {
  return APIUtil.addTracks(artistId, albumId, tracks).then(() => {
    // no action at the moment
  }, errors => (
    dispatch(receiveErrors(errors))
  ));
};

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

