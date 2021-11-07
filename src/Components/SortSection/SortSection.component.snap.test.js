import React from 'react';
import renderer from 'react-test-renderer';
import SortSection from './SortSection.component';

jest.mock('react-redux', () => ({
	useDispatch: jest.fn(),
	useSelector: jest.fn()
}));

test('Render Sort Section Component', () => {
	const component = renderer.create(
		<SortSection />,
	);
	const tree = component.toJSON();

	expect(tree).toMatchSnapshot();
});
