import axios from 'axios';

const baseURL = 'https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json';

export const getCampaignList = () => {
	return axios.get(baseURL).then(response => response.data.data);
};
