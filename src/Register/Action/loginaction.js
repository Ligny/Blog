export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = (data) => ({ type: LOGIN_REQUEST, payload: {data} });
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFailure = () => ({ type: LOGIN_FAILURE });