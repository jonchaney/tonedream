import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

import { updateUser } from './actions/user_actions';
import { createTrack } from './actions/track_actions';
import { createAlbum } from './actions/album_actions';

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
  window.createTrack = createTrack;

  // window.search = search;
  // end test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
