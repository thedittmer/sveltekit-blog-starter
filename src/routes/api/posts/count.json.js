export const get = async () => {
	try {
	  const res = await fetch("https://wp.bigdog979.com/wp-json/wp/v2/posts?per_page=100")
	  const posts = await res.json();
	  console.log(posts.length);
		  return {
			  status: 200,
			  body: {
				  total: Object.keys(posts).length
			  }
		  }
	  }
  
	  catch {
		  return {
			  status: 500,
			  body: {
				  error: 'Could not retrieve total number of posts.'
			  }
		  }
	  }
  }