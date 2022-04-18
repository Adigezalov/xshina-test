import {call, put} from 'redux-saga/effects'

import {getContactsApi} from '@api/contacts'
import {contactActions} from './actions'

export function* getContacts() {
	yield put(contactActions.getContactsRequest())

	const response = yield call(getContactsApi)

	if (response) {
		yield put(contactActions.getContactsSuccess(response.data.pickPoints))
	} else {
		yield put(contactActions.getContactsFailed())
	}
}

export function* setCoordinate(action) {
	yield put(contactActions.setCoordinateSuccess(action.payload))
}
