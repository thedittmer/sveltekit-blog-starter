import wpGraphql from './wpGraphql';

const fetchSinglePost = async (id) => {

	const options = {
    query_id: 'post',
    variables: 'slug: ' + id
  }
  
  
	const resPost = await wpGraphql(options)
  
    const post  = await resPost;
        //    console.log(post, "from fetchsinglepost");
    return{
        post
    }
    
} 


export default fetchSinglePost