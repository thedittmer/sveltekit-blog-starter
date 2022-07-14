import { postsPerPage, wpGraphqlEndpoint } from '$lib/config'

const fetchWpPosts = async ({ offset = 0, limit = postsPerPage, category = '' } = {}) => {

	let cursor = ''
	if (offset) {
		// get cursors up until offset
		var queryCursor = `
		{
			posts(first: ${offset}) {
			edges {
					cursor
				}
			}
		}
		`;
		const resCursors = fetch(wpGraphqlEndpoint + '?query=' + queryCursor)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			return response.data.posts.edges;
		});
		// we need the last cursor on the list
		// https://graphql.org/learn/pagination/#pagination-and-edges
		const cursors = await resCursors
		cursor = cursors[cursors.length - 1].cursor;
	}
	
	var query = `
	{
		posts(first: ${limit}, after: "${cursor}") {
			edges {
			  cursor
			  node {
				content,
				date,
				excerpt,
				postId,
				slug,
				title,
				uri,
			  }
			}
		  }
		}
  `;

	// Build query string.
	var queryString = '?query=' + query;

	// Combine the endpoint with the query string.
	var fetchUrl = wpGraphqlEndpoint + queryString;
	// console.log(fetchUrl)
	// Fetch the url.
	const resPosts = fetch(fetchUrl)
		// When the promise resolves return the response as parsed json.
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			return response.data.posts.edges;
		});

		const postsArray = await resPosts
		
	const posts = postsArray.map((post) => {
		// Below is how you get the wp featured image, cant get it to work tho, um-commenting will break it.
		// post.image =post._embdedded["wp:featuredmedia"][0].source_url
		return {
			slug: post.node.slug,
			postId: post.node.postId,
			title: post.node.title,
			excerpt: post.node.excerpt,
			date: post.node.date,
			content: post.node.content,
			cursor: post.cursor,
		};
	});
	
  return {
    posts: posts,
  }
}

export default fetchWpPosts