export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ARTIST_ERRORS = "RECEIVE_ARTIST_ERRORS";
export const CLEAR_ARTIST_ERRORS = "CLEAR_ARTIST_ERRORS";

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS,
  errors
});

export const receiveArtistErrors = errors => ({
  type: RECEIVE_ARTIST_ERRORS,
  errors
});

export const clearArtistErrors = errors => ({
  type: CLEAR_ARTIST_ERRORS,
  errors
});