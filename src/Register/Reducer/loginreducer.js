// @flow

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from './../Action/loginaction';

const initialState = {
    login: '',
    error: null
};

export default function FetchingLog(state: StateType = initialState, action: any) {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                login: "success",
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                login: "fail",
            };
        }
        case LOGIN_REQUEST: {
            return {
                ...state,
                login: "loading",
            };
        }
        case LOGOUT: {
            return {
                ...state,
                login: "logout"
            };
        }
        default:
            return state;
    }
}