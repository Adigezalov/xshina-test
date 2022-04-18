import {all, call} from 'redux-saga/effects'
import {watchContact} from '@bus/contact/watchers'

export function* rootSaga() {
	yield all([call(watchContact)])
}
