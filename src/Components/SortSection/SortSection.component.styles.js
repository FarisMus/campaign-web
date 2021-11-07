export default {
	container: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '20em',
		justifyContent: 'space-between'
	},
	getButtonStyles: (active) => ({
		padding: '1.5em',
		border: 'none',
		borderRadius: '5px 5px 5px 5px',
		backgroundColor: active ? '#4b4a4c': '#efefef',
		color: active ? '#e8e6eb': '#1f1d1e'
	})
};
