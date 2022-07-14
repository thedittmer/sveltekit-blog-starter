import fetchSinglePost from "$lib/assets/js/fetchSinglePost";


export const get = async (params) =>{
  const id = params.params.id
// console.log(params.params.id, "params from slug jason.");
    const post = await fetchSinglePost(id)
    return {
        status: 200,
        body: {
            post
        }
    }
}