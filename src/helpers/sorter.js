export default (items, key) => {
	return items.sort((a, b) => {
		return a[key] > b[key];
	});
}