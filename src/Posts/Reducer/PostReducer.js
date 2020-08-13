// @flow

import { type StateType } from './../Type/PostType';
import {
    API_REQUEST_POST,
    API_REQUEST_POST_SUCCESS,
    API_REQUEST_POST_FAILURE
} from './../Action/PostAction';

const initialState: StateType = {
    list: [],
    status: '',
    error: null
};

export default function FetchingState(state: StateType = initialState, action: any): StateType {
    switch (action.type) {
        case API_REQUEST_POST_SUCCESS: {
            const { list } = action.payload;
            return {
                ...state,
                list: [...state.list,
                ...list,
                ],
                status: "success",
            };
        }
        case API_REQUEST_POST: {
            return {
                ...state,
                status: "loading",
            };
        }
        case API_REQUEST_POST_FAILURE: {
            return {
                ...state,
                status: "fail",
            };
        }
        default:
            return state;
    }
}