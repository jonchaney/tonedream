import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { fetchTracks,
         createTrack,
         deleteTrack,
         updateTrack,
         fetchTrack,
         clearTrack,
         clearTracks
} from './actions/audio_player_actions';

import { deleteAlbum, createAlbum, updateAlbum } from './util/album_api_util';


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
  window.deleteAlbum = deleteAlbum;
  window.createAlbum = createAlbum;
  window.updateAlbum = updateAlbum;
  // window.search = search;
  // end test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
