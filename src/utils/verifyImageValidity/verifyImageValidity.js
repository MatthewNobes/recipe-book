export const verifyImageValidity = async (url) => {
	const img = new Image();
	img.src = url;
	const result = await new Promise((resolve) => {
		img.onload = () => resolve(true);
		img.onerror = () => resolve(false);
	});
	return result;
};
