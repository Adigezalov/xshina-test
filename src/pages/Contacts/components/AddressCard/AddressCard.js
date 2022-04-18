import React from 'react'
import classNames from 'classnames'

import styles from './AddressCard.module'

const AddressCard = ({address, budgets, latitude, longitude, selectAddress, select}) => {
	return (
		<div
			className={classNames(styles.root, {[styles.select]: select})}
			onClick={() => {
				selectAddress([latitude, longitude])
			}}
		>
			<span className={styles.address}>{address}</span>
			<div className={styles.budgets}>
				{budgets.map((budget, index) => (
					<div key={index} className={styles.budget}>
						<span>{budget}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default AddressCard
