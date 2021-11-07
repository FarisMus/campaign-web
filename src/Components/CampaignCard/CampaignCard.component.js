import React from 'react';

import styles from './CampaignCard.component.styles';

const _renderImage = (src) => {
	return (
		<div style={styles.image}>
			<img src={src} alt={'poster'} width={'100%'}/>
		</div>
	);
};

const _renderTitle = (title) => {
	return <div style={styles.title}>{title}</div>;
};

const _renderIncompleteProgressBar = (percentage) => {
	const progress = percentage * 100;
	const rest = 100 - progress;

	return (
		<div style={styles.progressBarContainer}>
			<div style={{
				border: '#636363 8px solid',
				borderRadius: '8px 0 0 8px',
				width: `${progress}%`
			}}/>
			<div style={{
				border: '#dbdbdb 8px solid',
				borderRadius: '0 8px 8px 0',
				width: `${rest}%`
			}}
			/>
		</div>
	);
};

const _renderProgressBar = (percentage) => {
	if(percentage < 1.0) {
		return _renderIncompleteProgressBar(percentage);
	}

	return (
		<div style={styles.progressBarContainer}>
			<div style={{
				border: '#ffa7f3 8px solid',
				borderRadius: '8px 8px 8px 8px',
				width: `${percentage * 100}%`
			}}/>
		</div>
	)
};

const _renderInfo = (donationReceived, daysRemaining) => {
	const currencyFormatter = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR'
	});
	const formattedAmount = currencyFormatter.format(donationReceived);

	return (
		<div>
			<div style={styles.infoRow}>
				<div>
					Terkumpul
				</div>
				<div>
					Sisa hari
				</div>
			</div>
			<div style={styles.infoRow}>
				<div>
					{formattedAmount}
				</div>
				<div>
					{daysRemaining}
				</div>
			</div>
		</div>
	);
};

const CampaignCard = (props) => {
	return (
		<div style={styles.card}>
			{_renderImage(props.image)}
			{_renderTitle(props.title)}
			{_renderProgressBar(props.donation_percentage)}
			{_renderInfo(props.donation_target, props.days_remaining)}
		</div>
	);
};

export default CampaignCard;
