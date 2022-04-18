import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {contactActions} from '@bus/contact/actions'
import {getContacts} from '@bus/contact/selectors'

import LocalMap from './components/LocalMap'
import Locations from './components/Locations'

import styles from './Contacts.module'

const Contacts = () => {
	const dispatch = useDispatch()
	const {contacts, loadingContacts} = useSelector(getContacts)

	useEffect(() => {
		dispatch(contactActions.getContactsAsync())
	}, [])

	if (loadingContacts && !contacts.length) {
		return (
			<div className={styles.root}>
				<p className={styles.loading}>Идет загрузка списка адресов...</p>
			</div>
		)
	}

	return (
		<div className={styles.root}>
			<Locations />
			<LocalMap />
		</div>
	)
}

export default Contacts
