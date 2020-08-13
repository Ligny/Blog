export const API_REQUEST_COMMENT = 'API_REQUEST_COMMENT';
export const API_REQUEST_COMMENT_SUCCESS = 'API_REQUEST_COMMENT_SUCCESS';
export const API_REQUEST_COMMENT_FAILURE = 'API_REQUEST_COMMENT_FAILURE';

export const apiRequestComment = (id) => ({ type: API_REQUEST_COMMENT, payload: {id} });
export const apiSuccessComment = payload => ({ type: API_REQUEST_COMMENT_SUCCESS, payload });
export const apiFailureComment = error => ({ type: API_REQUEST_COMMENT_FAILURE, error });