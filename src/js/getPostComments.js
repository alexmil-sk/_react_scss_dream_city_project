export async function getPostComments(id) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
	if (!res.ok) {
		throw new Response('', { status: res.status, statusText: res.statusText })
	}

	return res.json();
}