import React from 'react';
import renderer from 'react-test-renderer';
import CampaignPage from './CampaignPage.component';

jest
	.mock('react-redux', () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn()
}));

test('Render Campaign Page Component', () => {
	const component = renderer.create(
		<CampaignPage />,
	);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});
