import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSortBy } from '../../redux/Reducer/reducers';
import styles from './SortSection.component.styles';

const SortSection = () => {
	const dispatch = useDispatch();
	const sortCriteria = useSelector((state) =>  state.sortBy);

	return (
		<div style={styles.container}>
			<button
				onClick={() => dispatch(setSortBy('donation_target'))}
				style={styles.getButtonStyles(sortCriteria === 'donation_target')}
			>Sort by donation goal</button>
			<button
				onClick={() => dispatch(setSortBy('days_remaining'))}
				style={styles.getButtonStyles(sortCriteria === 'days_remaining')}
			>Sort by days left</button>
		</div>
	);
};

export default SortSection;
