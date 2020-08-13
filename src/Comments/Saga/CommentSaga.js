import { call, put, takeLatest } from 'redux-saga/effects';

import { apiSuccessComment, apiFailureComment, API_REQUEST_COMMENT } from './../Action/CommentAction';

const fetchComments = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const data = await res.json();
    return data;
};

function* apiSagaComment (action) {
    try {
        const list = yield call(fetchComments, action.payload.id);
        const payload = { comment: list };
        yield put(apiSuccessComment(payload));
    } catch (error) {
        yield put(apiFailureComment(error));
    }
}

export function * rootSagaComment() {
    yield takeLatest(API_REQUEST_COMMENT, apiSagaComment);
}

export default rootSagaComment;