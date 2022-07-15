import wpGraphql from "$lib/assets/js/wpGraphql";

export const get = async () => {
	try {
		const resTotal = await wpGraphql( { query_id: 'posts_total' } )
		const totalPosts = resTotal.data.posts.pageInfo.total

		return {
			status: 200,
			body: {
				total: totalPosts,
			}
		};
	} catch {
		return {
			status: 500,
			body: {
				error: 'Could not retrieve total number of posts.'
			}
		};
	}
};
