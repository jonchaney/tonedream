import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

import { fetchAlbum, 
         fetchAlbums, 
         createAlbum, 
         deleteAlbum, 
         updateAlbum,
         clearAlbums } from './actions/album_actions';
import { updateUser, fetchUser } from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
    } else {
    store = configureStore();
    }

  // test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAlbum = fetchAlbum;
  window.fetchAlbums = fetchAlbums;
  window.createAlbum = createAlbum;
  window.deleteAlbum = deleteAlbum;
  window.updateAlbum = updateAlbum;
  window.updateUser = updateUser;
  window.clearAlbums = clearAlbums;
  window.fetchUser = fetchUser;
  // end test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
