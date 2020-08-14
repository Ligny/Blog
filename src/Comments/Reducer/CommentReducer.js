import { type StateType } from './../Type/commenttype';
import {
    API_REQUEST_COMMENT,
    API_REQUEST_COMMENT_SUCCESS,
    API_REQUEST_COMMENT_FAILURE
} from './../Action/commentaction';

const initialState: StateType = {
    comment: [],
    status: '',
    error: null
};

export default function FetchingState(state: StateType = initialState, action: any): StateType {
    switch (action.type) {
        case API_REQUEST_COMMENT_SUCCESS: {
            const { comment } = action.payload;
            return {
                ...state,
                comment: [...comment],
                status: "success",
            };
        }
        case API_REQUEST_COMMENT: {
            return {
                ...state,
                status: "loading",
            };
        }
        case API_REQUEST_COMMENT_FAILURE: {
            return {
                ...state,
                status: "fail",
            };
        }
        default:
            return state;
    }
}