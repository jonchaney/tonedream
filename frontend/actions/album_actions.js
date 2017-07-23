import * as APIUtil from '../util/album_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";
export const REQUEST_ALBUM = "REQUEST_ALBUM";
export const REQUEST_ALBUMS = "REQUEST_ALBUMS";
export const CLEAR_ALBUMS = "CLEAR_ALBUMS";
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

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const requestAlbum = () => ({
  type: REQUEST_ALBUM
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


export const fetchAlbum = albumId => dispatch => (
    APIUtil.fetchAlbum(albumId).then(album => {
      dispatch(receiveAlbum(album)); 
    }, errors => (
      dispatch(receiveErrors(errors))
    ))
);

export const fetchAlbums = () => dispatch => {
  dispatch(startLoadingAllAlbums());
  return APIUtil.fetchAlbums().then(albums => {
    dispatch(receiveAlbums(albums));
  }, errors => (
    dispatch(receiveErrors(errors))
  ));
};

export const createAlbum = album => dispatch => (
  APIUtil.createAlbum(album).then(album => {
    dispatch(receiveAlbum(album));
  }, errors => (
    dispatch(receiveErrors(errors))
  ))
);

export const deleteAlbum = id => dispatch => (
  APIUtil.deleteAlbum(id)
);

export const updateAlbum = album => dispatch => (
  APIUtil.updateAlbum(album).then(album => {
    dispatch(receiveAlbum(album));
  }, errors => (
    dispatch(receiveErrors(errors))
  ))
);

