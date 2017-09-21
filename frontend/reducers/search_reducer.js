import { RECEIVE_RESULTS, CLEAR_RESULTS, RECEIVE_FEATURED } from '../actions/search_actions';

const SearchReducer = (state = { results: [], featured: [] }, action) => {
  let newState = Object.assign({}, state);
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESULTS:
      newState.results = action.results;
      return newState;
    case CLEAR_RESULTS:
      newState = { results: [], featured: state.featured };
      return newState;
    case RECEIVE_FEATURED:
      newState.featured = action.featured;
      return newState;
    default:
      return state;
  }
};

export default SearchReducer;