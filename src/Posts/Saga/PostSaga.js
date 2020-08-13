// @flow

import { call, put, takeLatest } from 'redux-saga/effects';

import { apiSuccessPost, apiFailurePost, API_REQUEST_POST } from './../Action/PostAction';

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
};

function* apiSaga () {
    try {
        const list = yield call(fetchData);
        const payload = { list };
        yield put(apiSuccessPost(payload));
    } catch (error) {
        yield put(apiFailurePost(error));
    }
}

export function * rootSagaPost() {
    yield takeLatest(API_REQUEST_POST, apiSaga);
}

export default rootSagaPost;