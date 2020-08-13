// @flow

import { spawn, all } from 'redux-saga/effects'

import MessageSaga from './Posts/Saga/PostSaga';
import CommentSaga from './Comments/Saga/CommentSaga'

function *sagas(): Generator<*,*,*> {
    yield all([
        spawn(MessageSaga),
        spawn(CommentSaga),
    ]);
}

export default sagas;