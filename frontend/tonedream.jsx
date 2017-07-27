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
         clearTracks  } from './actions/track_actions';


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
  window.fetchTracks = fetchTracks;
  window.createTrack = createTrack;
  window.deleteTrack = deleteTrack;
  window.updateTrack = updateTrack;
  window.fetchTrack = fetchTrack;
  window.clearTrack = clearTrack;
  window.clearTracks = clearTracks;
  // end test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
