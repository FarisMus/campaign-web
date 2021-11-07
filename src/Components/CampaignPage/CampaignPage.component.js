import React, { useState, useEffect } from 'react';
import useAsyncEffect from 'use-async-effect';
import { useSelector } from 'react-redux';

import { getCampaignList } from '../../Services/CampaignServices';
import CampaignCard from '../CampaignCard/CampaignCard.component';
import { sortObjectByKey } from '../../Utils/Utils'
import styles from './CampaignPage.componens.styles';

const CampaignPage = () => {
	const [campaigns, setCampaigns] = useState([]);
	const sortCriteria = useSelector((state) =>  state.sortBy);

	useAsyncEffect(async () => {
		const result = await getCampaignList();

		setCampaigns(result, sortCriteria);
	}, []);

	useEffect(() => {
		const sortedList = sortObjectByKey(campaigns, sortCriteria);

		setCampaigns(sortedList);
	}, [sortCriteria]);

	return (
		<div style={styles.container}>
			{campaigns.map((campaign) => <CampaignCard {...campaign} />)}
		</div>
	);
};

export default CampaignPage;
