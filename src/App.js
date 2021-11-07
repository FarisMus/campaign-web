import React from "react";
import CampaignPage from './Components/CampaignPage/CampaignPage.component';
import SortSection from './Components/SortSection/SortSection.component';
import icon from './assets/icons/kitabisa-logo.png';

const _renderHeaderSection = () => (
	<div style={{ display: 'flex', justifyContent: 'space-between', height: '4em' }}>

		<img src={icon} alt='main-logo' />
		<SortSection />
	</div>
);

const App = () => (
	<div>
		{_renderHeaderSection()}
		<CampaignPage />
	</div>
);

export default App;
