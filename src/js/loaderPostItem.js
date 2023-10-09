import { getObjectsArray } from "/src/js/getObjectsArray.js";

export const loaderPostItem = async ({ params }) => {
	const id = params.id;

	return { objects: await getObjectsArray(), id };
};
