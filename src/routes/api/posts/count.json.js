import { wpGraphqlEndpoint } from '$lib/config';

export const get = async () => {
	try {
		var query = `
		{
			posts {
				pageInfo {
					total
				}
			}
		}
		`;

		// Build query string.
		var queryString = '?query=' + query;

		// Combine the endpoint with the query string.
		var fetchUrl = wpGraphqlEndpoint + queryString;

		// Fetch the url.
		const resTotal = await fetch(fetchUrl)
			// When the promise resolves return the response as parsed json.
			.then(function (response) {
				return response.json();
			})
			.then(function (response) {
				return response.data.posts.pageInfo.total;
			});

		return {
			status: 200,
			body: {
				total: resTotal,
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
