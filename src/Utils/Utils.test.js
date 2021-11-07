import { sortObjectByKey } from './Utils';

describe('#sortObjectByKey', () => {
	it('should return sorted array', async () => {
		const array = [
			{ key: 2 },
			{ key: 5 },
			{ key: 3 },
			{ key: 1 }
		];
		const expectedResult = [
			{ key: 1 },
			{ key: 2 },
			{ key: 3 },
			{ key: 5 }
		];

		const result = sortObjectByKey(array, 'key');

		expect(result).toEqual(expectedResult);
	});
});

