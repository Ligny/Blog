// @flow

export const API_REQUEST_REGISTER = 'API_REQUEST_REGISTER';
export const API_REQUEST_REGISTER_SUCCESS = 'API_REQUEST_REGISTER_SUCCESS';
export const API_REQUEST_REGISTER_FAILURE = 'API_REQUEST_REGISTER_FAILURE';

export const apiRequestRegister = () => ({ type: API_REQUEST_REGISTER });
export const apiSuccessRegister = payload => ({ type: API_REQUEST_REGISTER_SUCCESS, payload });
export const apiFailureRegister = error => ({ type: API_REQUEST_REGISTER_FAILURE, error });