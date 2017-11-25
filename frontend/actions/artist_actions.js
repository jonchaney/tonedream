import * as APIUtil from '../util/artist_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const ARTIST_LOADING = "ARTIST_LOADING";

// action creators

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const loadArtist = () => ({
  type: ARTIST_LOADING
});

// thunk action creators

export const fetchArtist = id => dispatch => {
  dispatch(loadArtist());
  return APIUtil.fetchArtist(id).then(artist => {
    dispatch(receiveArtist(artist));
  }, errors => (
    dispatch(receiveErrors(errors))
  ));
};

export const fetchArtists = (id) => dispatch => {
  return APIUtil.fetchArtists(id).then(artists => {
    dispatch(receiveArtists(artists));
  }, errors => (
    dispatch(receiveErrors(errors))
  ));
};

export const createArtist = artist => dispatch => (
  APIUtil.createArtist(artist).then(album => {
    dispatch(receiveArtist(artist));
  }, errors => (
    dispatch(receiveErrors(errors))
  ))
);

export const deleteArtist = id => dispatch => (
  APIUtil.deleteArtist(id)
);

export const updateArtist = (id, data) => dispatch => (
  APIUtil.updateArtist(id, data).then(artist => {
    dispatch(receiveArtist(artist));
  }, errors => (
    dispatch(receiveErrors(errors))
  ))
);

// not tested yet
export const updateFormArtist = (formData, id) => (dispatch) => {
  return APIUtil.updateFormArtist(formData, id).then(
    response => dispatch(receiveArtist(response))
  );
};