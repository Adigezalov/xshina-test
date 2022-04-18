import {createAction} from '@reduxjs/toolkit'

import {contactTypes} from './types'

export const contactActions = {
	// Sync
	getContactsRequest: createAction(contactTypes.GET_CONTACTS_REQUEST),
	getContactsSuccess: createAction(contactTypes.GET_CONTACTS_SUCCESS, data => ({payload: data})),
	getContactsFailed: createAction(contactTypes.GET_CONTACTS_FAILED, data => ({payload: data})),
	setCoordinateSuccess: createAction(contactTypes.SET_COORDINATES_SUCCESS, data => ({payload: data})),

	// Async
	getContactsAsync: createAction(contactTypes.GET_CONTACTS_ASYNC),
	setCoordinateAsync: createAction(contactTypes.SET_COORDINATES_ASYNC, data => ({payload: data})),
}
