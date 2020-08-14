// @flow

import {
    API_REQUEST_REGISTER,
    API_REQUEST_REGISTER_SUCCESS,
    API_REQUEST_REGISTER_FAILURE
} from './../Action/registeraction';

const initialState = {
    register: [],
    status: '',
    error: null
};

export default function FetchingState(state: StateType = initialState, action: any) {
    switch (action.type) {
        case API_REQUEST_REGISTER_SUCCESS: {
            const { register } = action.payload;
            return {
                ...state,
                register: [...register],
                status: "success",
            };
        }
        case API_REQUEST_REGISTER: {
            return {
                ...state,
                status: "loading",
            };
        }
        case API_REQUEST_REGISTER_FAILURE: {
            return {
                ...state,
                status: "fail",
            };
        }
        default:
            return state;
    }
}