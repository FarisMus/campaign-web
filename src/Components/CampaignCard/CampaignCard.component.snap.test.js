import React from 'react';
import renderer from 'react-test-renderer';
import CampaignCard from './CampaignCard.component';

describe('Render Campaign Card Component', () => {
	const defaultProps = {
		image: 'image.png',
		title: 'Campaign Title',
		donation_percentage: 0.02,
		donation_target: 1000000,
		days_remaining: 32
	};

	test('Render CampaignCard with unreached target', () => {
		const component = renderer.create(
			<CampaignCard {...defaultProps} />,
		);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});

	test('Render CampaignCard with reached target', () => {
		const _props = {
			...defaultProps,
			donation_percentage: 1.0
		};
		const component = renderer.create(
			<CampaignCard {..._props} />,
		);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
