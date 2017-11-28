import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

import { updateUser } from './actions/user_actions';

// current state of code is not what is pushed to heroku
// COMPLETED THUS FAR

// database has been redesigned
// APIs rewritten and tested

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
  window.updateUser = updateUser;

  // window.search = search;
  // end test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
