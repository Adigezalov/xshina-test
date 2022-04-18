import {combineReducers} from 'redux'

import {contactReducer} from '@bus/contact/reducers'

export const rootReducer = () =>
	combineReducers({
		contact: contactReducer,
	})
