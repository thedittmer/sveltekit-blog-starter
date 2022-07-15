
import { postsPerPage, wpGraphqlEndpoint } from "$lib/config";

const wpGraphql = async ( { query_id,  offset = 0 } ) => {
    
    const limit = postsPerPage

    // get cursor
    let cursor = ''
	if (offset !== null && offset > 0) {
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

    // get full graphql query with query_id
    let query = ''
    switch (query_id) {
        case 'post':
            query = `
            
            `;
          break;
        case 'posts':
            query = `
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
          break;
        case 'posts_total':
            query = `
            {
                posts {
                    pageInfo {
                        total
                    }
                }
            }
            `;
      }

	// Build query string.
	var queryString = '?query=' + query;

	// Combine the endpoint with the query string.
	var fetchUrl = wpGraphqlEndpoint + queryString;
	
	// Fetch the url.
	const response = fetch(fetchUrl)
		// When the promise resolves return the response as parsed json.
		.then(function (response) {
			return response.json();
		})

    return response
}

export default wpGraphql