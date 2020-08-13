// @flow

import { combineReducers } from 'redux';

import FetchingStatePost from './Posts/Reducer/PostReducer';
import FetchingStateComment from './Comments/Reducer/CommentReducer';

const state = combineReducers({
    postState: FetchingStatePost,
    commentState: FetchingStateComment,
});

export default state;