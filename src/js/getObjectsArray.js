// export async function getPostItem(id) {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

// 	if (!res.ok) {
// 		throw new Response('', { status: res.status, statusText: res.statusText })
// 	}
// 	return res.json();
// }





export async function getObjectsArray() {
	const res = await fetch(`/src/db/ru/dbObjectCard.json`);

	if (!res.ok) {
		throw new Response('', { status: res.status, statusText: res.statusText })
	}
	return res.json();
}
