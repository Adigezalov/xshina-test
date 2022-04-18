import {createReducer} from '@reduxjs/toolkit'

import {contactActions} from './actions'

const initialState = {
	contacts: [],
	coordinates: null,
	loadingContacts: false,
}

export const contactReducer = createReducer(initialState, builder => {
	builder.addCase(contactActions.getContactsRequest, state => ({
		...state,
		contacts: state.contacts,
		loadingContacts: true,
	}))

	builder.addCase(contactActions.getContactsSuccess, (state, action) => ({
		...state,
		contacts: action.payload,
		loadingContacts: false,
	}))

	builder.addCase(contactActions.getContactsFailed, (state, action) => ({
		...state,
		contacts: state.contacts,
		loadingContacts: false,
	}))

	builder.addCase(contactActions.setCoordinateSuccess, (state, action) => ({
		...state,
		coordinates: action.payload,
	}))
})
