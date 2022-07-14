import {wpGraphqlEndpoint} from '$lib/config'

const fetchSinglePost = async (id) => {

	 console.log(id , ' from fetchsinglepost');
	var query = `
    query getPostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
            databaseId
			slug
			uri
          date
          title
          content
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
  `;

	
	const resPost = fetch(wpGraphqlEndpoint,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            query,
              variables:{
                 slug: id
              } 
        })
    })
	.then(function(response){
        return response.json()
    })
    .then(function(response){
        // console.log(response.data)
        return response.data
        
    })

    const {post} = await resPost;
         console.log(post, 'post from fetch')
    return{
        post
    }
    
} 


export default fetchSinglePost