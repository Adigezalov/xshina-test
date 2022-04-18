import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from '@redux/store'

import Contacts from '@pages/Contacts'

import './styles'

ReactDOM.render(
	<Provider store={store}>
		<Contacts />
	</Provider>,
	document.getElementById('app')
)
