import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getContacts} from '@bus/contact/selectors'
import {contactActions} from '@bus/contact/actions'

import AddressCard from '../AddressCard'

import styles from './Locations.module'

const Locations = () => {
	const dispatch = useDispatch()
	const {contacts, coordinates} = useSelector(getContacts)

	const selectAddress = coordinate => {
		dispatch(contactActions.setCoordinateAsync(coordinate))
	}

	return (
		<div className={styles.root}>
			{contacts.map((contact, index) => {
				let select = false
				if (coordinates) {
					// в предоставленных данных нет идентифицирующего поля...
					if (contact.latitude === coordinates[0] && contact.longitude === coordinates[1]) select = true
				}
				return <AddressCard key={index} {...contact} selectAddress={selectAddress} select={select} />
			})}
		</div>
	)
}

export default Locations
