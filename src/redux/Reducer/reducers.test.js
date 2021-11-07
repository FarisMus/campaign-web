import reducer, { setSortBy } from './reducers';

describe('reducers', () => {
	test('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			sortBy: ''
		});
	});

	test('should set list to new value', () => {
		const previousState = {
			sortBy: ''
		};
		expect(reducer(previousState, setSortBy('donation_target')))
			.toEqual({...previousState, sortBy: 'donation_target'});
	});

});
