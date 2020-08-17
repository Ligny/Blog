import { call, put, takeLatest } from 'redux-saga/effects';

import { logOut } from "./../../Register/Action/loginaction";

function *logout() {
    try {
        yield put(logOut());
    } catch(error) {}
}

export function * rootSagaLogout() {
    yield takeLatest(logout);
}

export default rootSagaLogout;