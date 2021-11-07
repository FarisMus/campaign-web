export const sortObjectByKey = (list, key) => {
	return [...list].sort((x, y) => {
		return x[key] > y[key] ? 1 : -1
	});
};
