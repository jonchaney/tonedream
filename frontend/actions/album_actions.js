import * as APIUtil from '../util/album_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const REQUEST_ALBUM = "REQUEST_ALBUM";
export const REQUEST_ALBUMS = "REQUEST_ALBUMS";

// action creators

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
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

export const fetchAlbum = albumId => dispatch => (
    APIUtil.fetchAlbum(albumId).then(album => {
      dispatch(receiveAlbum(album)); 
    }, errors => (
      dispatch(receiveErrors(errors))
    ))
);

export const fetchAlbums = () => dispatch => (
  APIUtil.fetchAlbums().then(albums => {
    dispatch(receiveAlbums(albums));
  }, errors => (
    dispatch(receiveErrors(errors))
  ))
);

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

