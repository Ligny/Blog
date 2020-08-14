// @flow

import { call, put, takeLatest } from 'redux-saga/effects';

import { apiSuccessRegister, apiFailureRegister, API_REQUEST_REGISTER } from './../Action/registeraction';

const fetchRegister = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
};

function* apiSagaRegister () {
    try {
        const list = yield call(fetchRegister);
        const payload = { register: list };
        yield put(apiSuccessRegister(payload));
    } catch (error) {
        yield put(apiFailureRegister(error));
    }
}

export function* rootSagaRegister() {
    yield takeLatest(API_REQUEST_REGISTER, apiSagaRegister);
}

export default rootSagaRegister;