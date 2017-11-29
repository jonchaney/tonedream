import * as APIUtil from '../util/artist_api_util';
import { receiveArtistErrors, clearErrors } from './error_actions';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const ARTIST_LOADING = "ARTIST_LOADING";
export const CLEAR_ARTIST = "CLEAR_ARTIST";

// action creators

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const clearArtist = () => ({
  type: CLEAR_ARTIST
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
    dispatch(receiveArtistErrors(errors))
  ));
};

export const fetchArtists = (id) => dispatch => {
  return APIUtil.fetchArtists(id).then(artists => {
    dispatch(receiveArtists(artists));
  }, errors => (
    dispatch(receiveArtistErrors(errors))
  ));
};

export const createArtist = artist => dispatch => (
  APIUtil.createArtist(artist).then(album => {
    dispatch(receiveArtist(artist));
  }, err => (
    dispatch(receiveArtistErrors(err.responseJSON))
  ))
);

export const deleteArtist = id => dispatch => (
  APIUtil.deleteArtist(id)
);

export const updateArtist = (artist) => dispatch => (
  APIUtil.updateArtist(artist).then(artist => {
    dispatch(receiveArtist(artist));
  }, errors => (
    dispatch(receiveArtistErrors(errors))
  ))
);

// not tested yet
export const updateFormArtist = (formData, id) => (dispatch) => {
  return APIUtil.updateFormArtist(formData, id).then(
    response => dispatch(receiveArtist(response))
  );
};