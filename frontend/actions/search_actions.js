import { searchDB, featured } from '../util/search_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const RECEIVE_FEATURED = 'RECEIVE_FEATURED';
export const CLEAR_RESULTS = "CLEAR_RESULTS";

export const search = (query) => {
  return (dispatch) => {
    return searchDB(query)
      .then(
      results => dispatch(receiveResults(results)),
      errors => dispatch(receiveErrors(errors))
      );
  };
};

export const getFeatured = (num) => {
  return (dispatch) => {
    return featured(num)
      .then(
      featured => dispatch(receiveFeatured(featured)),
      errors => dispatch(receiveErrors(errors))
      );
  };
};

export const receiveResults = results => ({
  type: RECEIVE_RESULTS,
  results
});

export const clearResults = () => ({
  type: CLEAR_RESULTS
});

export const receiveFeatured = featured => ({
  type: RECEIVE_FEATURED,
  featured
});