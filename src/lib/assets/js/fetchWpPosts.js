import wpGraphql from '../js/wpGraphql'

const fetchWpPosts = async ({ offset = 0, category = '' } = {}) => {

	const options = {
		query_id: 'posts',
		offset,
		category
	}
	const postsArrayRes = await wpGraphql( options )

	const postsArray = await postsArrayRes.data.posts.edges;
	
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