import merge from 'lodash/merge';

import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS
} from '../actions/artist_actions';

const defaultState = {
  selectedArtist: {
    name: null,
    location: null,
    bio: null,
    image_url: null,
    id: null,
  },
  allArtists: [
    {
      name: null,
      location: null,
      bio: null,
      image_url: null,
      id: null,
    }
  ]
};

const ArtistReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ARTIST:
      newState.selectedArtist = action.artist;
      return merge({}, newState);
    case RECEIVE_ARTISTS:
      newState.allArtists = action.artists;
      return merge({}, newState);
    default:
      return state;
  }
};

export default ArtistReducer;
