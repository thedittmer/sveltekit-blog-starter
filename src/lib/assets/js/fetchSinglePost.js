import wpGraphql from './wpGraphql';

const fetchSinglePost = async (id) => {

	const options = {
    query_id: 'post',
    variables: 'slug: ' + id
  }
  
	const resPost = await wpGraphql(options)
  
    const post  = await resPost;
         
    return{
        post
    }
    
} 


export default fetchSinglePost