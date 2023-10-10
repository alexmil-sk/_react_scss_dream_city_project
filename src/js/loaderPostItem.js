import { getObjectsArray } from "/src/js/getObjectsArray.js";

export const loaderPostItem = async ({ request, params }) => {
	const id = params.id;

	console.log('request: ', request)
	console.log('params: ', params)

	return { objects: await getObjectsArray(), id };
};
