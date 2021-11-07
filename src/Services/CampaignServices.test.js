import * as axios from 'axios';
import { getCampaignList } from './CampaignServices';

jest.mock('axios');

describe('#getCampaignList', () => {
	it('should return with correct data when promise resolved', async () => {
		const mockData = ['campaign 1', 'campaign 2'];
		axios.get.mockImplementation(() => Promise.resolve({data: { data: mockData}}));

		const result = await getCampaignList();

		expect(result).toEqual(mockData);
	});
});

