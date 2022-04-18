import {all, takeLatest, call} from 'redux-saga/effects'

import {contactTypes} from './types'
import {getContacts, setCoordinate} from './workers'

function* watchGetContacts() {
	yield takeLatest(contactTypes.GET_CONTACTS_ASYNC, getContacts)
}

function* watchSetCoordinate() {
	yield takeLatest(contactTypes.SET_COORDINATES_ASYNC, setCoordinate)
}

export function* watchContact() {
	yield all([call(watchGetContacts), call(watchSetCoordinate)])
}
