import { searchDB, random } from '../util/search_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const RECEIVE_RANDOM = 'RECEIVE_RANDOM';
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

export const receiveResults = results => ({
  type: RECEIVE_RESULTS,
  results
});

export const clearResults = () => ({
  type: CLEAR_RESULTS
});