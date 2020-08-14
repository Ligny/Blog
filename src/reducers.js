// @flow

import { combineReducers } from 'redux';

import FetchingStatePost from './Posts/Reducer/postreducer';
import FetchingStateComment from './Comments/Reducer/commentreducer';
import FetchingStateRegister from './Register/Reducer/registerreducer';
import FetchingStateLogin from './Register/Reducer/loginreducer';

const state = combineReducers({
    postState: FetchingStatePost,
    commentState: FetchingStateComment,
    registerState: FetchingStateRegister,
    loginState: FetchingStateLogin,
});

export default state;