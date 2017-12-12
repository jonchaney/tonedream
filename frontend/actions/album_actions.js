import * as APIUtil from '../util/album_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";
export const REQUEST_ALBUM = "REQUEST_ALBUM";
export const REQUEST_ALBUMS = "REQUEST_ALBUMS";
export const CLEAR_ALBUMS = "CLEAR_ALBUMS";
export const CLEAR_ALBUM = "CLEAR_ALBUM";
export const CLEAR_ALBUM_ERRORS = "CLEAR_ALBUM_ERRORS";
export const START_LOADING_ALL_ALBUMS = 'START_LOADING_ALL_ALBUMS';
export const START_LOADING_SINGLE_ALBUM = 'START_LOADING_SINGLE_ALBUM';

// action creators

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const clearAlbums = () => ({
  type: CLEAR_ALBUMS
});

export const clearAlbum = () => ({
  type: CLEAR_ALBUM
});

export const clearAlbumErrors = () => ({
  type: CLEAR_ALBUM_ERRORS
});

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const requestAlbum = () => ({
  type: REQUEST_ALBUM,
  
});

export const requestAlbums = () => ({
  type: REQUEST_ALBUMS
});

export const startLoadingAllAlbums = () => ({
  type: START_LOADING_ALL_ALBUMS
});

export const startLoadingSingleAlbum = () => ({
  type: START_LOADING_SINGLE_ALBUM
});

export const receiveAlbumErrors = errors => ({
  type: RECEIVE_ALBUM_ERRORS,
  errors
});

export const fetchAlbum = albumId => dispatch => {
    dispatch(startLoadingSingleAlbum());
    return APIUtil.fetchAlbum(albumId).then(album => {
      dispatch(receiveAlbum(album)); 
    }, errors => (
      dispatch(receiveErrors(errors))
    ));
};

export const fetchAlbums = (id) => dispatch => {
  dispatch(startLoadingAllAlbums());
  return APIUtil.fetchAlbums(id).then(albums => {
    dispatch(receiveAlbums(albums));
  }, errors => (
    dispatch(receiveErrors(errors))
  ));
};

export const createAlbum = album => dispatch => (
  APIUtil.createAlbum(album).then(album => {
    dispatch(receiveAlbum(album));
  }, errors => (
    dispatch(receiveAlbumErrors(errors.responseJSON))
  ))
);

export const deleteAlbum = (artistId,albumId) => dispatch => (
  APIUtil.deleteAlbum(artistId, albumId)
);

export const updateAlbum = (artistId, albumId, album) => dispatch => {
  return APIUtil.updateAlbum(artistId, albumId, album).then(album => {
    dispatch(receiveAlbum(album));
  }, errors => (
    dispatch(receiveAlbumErrors(errors.responseJSON))
  ));
};

// not tested yet
export const updateFormAlbum = (formData, id) => (dispatch) => {
  return APIUtil.updateFormAlbum(formData, id).then(
    response => dispatch(receiveAlbum(response))
  );
};

