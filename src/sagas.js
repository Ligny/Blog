// @flow

import { spawn, all } from 'redux-saga/effects'

import MessageSaga from './Posts/Saga/postsaga';
import LogoutSaga from './Posts/Saga/logoutsaga';
import CommentSaga from './Comments/Saga/commentsaga';
import RegisterSaga from './Register/Saga/registersaga';
import LoginSaga from './Register/Saga/loginsaga';

function *sagas(): Generator<*,*,*> {
    yield all([
        spawn(MessageSaga),
        spawn(CommentSaga),
        spawn(RegisterSaga),
        spawn(LoginSaga),
        spawn(LogoutSaga),
    ]);
}

export default sagas;