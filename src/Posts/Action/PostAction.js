// @flow

export const API_REQUEST_POST = 'API_REQUEST_POST_REQUEST';
export const API_REQUEST_POST_SUCCESS = 'API_REQUEST_POST_SUCCESS';
export const API_REQUEST_POST_FAILURE = 'API_REQUEST_POST_FAILURE';

export const apiRequestPost = () => ({ type: API_REQUEST_POST });
export const apiSuccessPost = payload => ({ type: API_REQUEST_POST_SUCCESS, payload });
export const apiFailurePost = error => ({ type: API_REQUEST_POST_FAILURE, error });