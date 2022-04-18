import React, {useEffect, useRef} from 'react'
import {useSelector} from 'react-redux'
import {YMaps, Map, Placemark} from 'react-yandex-maps'

import {getContacts} from '@bus/contact/selectors'

import styles from './LocalMap.module'

const LocalMap = () => {
	const map = useRef()
	const {coordinates} = useSelector(getContacts)

	useEffect(() => {
		map?.current?.panTo(coordinates, {
			duration: 1000,
			timingFunction: 'linear',
		})
	}, [coordinates, map])

	return (
		<YMaps>
			<Map
				className={styles.root}
				instanceRef={map}
				defaultState={{center: coordinates || [56.838011, 60.597474], zoom: 17}}
			>
				{coordinates && <Placemark geometry={coordinates} />}
			</Map>
		</YMaps>
	)
}

export default LocalMap
