<!-- This file handles any /blog/page/x route for pagination -->

<script context="module">
  import { postsPerPage, siteDescription } from '$lib/config'
  import fetchWpPosts from '$lib/assets/js/fetchWpPosts'

  export const load = async ({ fetch, params }) => {
    try {
      const page = params.page ? params.page : 1

      // Keeps from duplicationg the blog index route as page 1
      if (page <= 1) {
        return {
          status: 301,
          redirect: '/blog'
        }
      }
      
      let offset = (page * postsPerPage) - postsPerPage
    
      const totalRes = await fetch(`/api/posts/count.json`)
      const { total } = await totalRes.json()
      const { posts } = await fetchWpPosts({offset, page})
      
      return {
        status: 200,
        props: {
          posts,
          page,
          totalPosts: total
        }
      }
    } catch(error) {
      return {
        status: 404,
        error: error.message
      }
    }
  }
</script>


<script>
  import PostsList from '$lib/components/PostsList.svelte'
  import Pagination from '$lib/components/Pagination.svelte'

  export let page
  export let totalPosts
  export let posts = []

  $: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
  $: upperBound = Math.min(page * postsPerPage, totalPosts)
</script>


<svelte:head>
	<title>Blog - page {page}</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>


<!-- TODO: this is duplicated in both `[page].svelte` files -->
{#if posts.length}
  <h1>Posts {lowerBound}–{upperBound} of {totalPosts}</h1>
  <Pagination currentPage={page} {totalPosts} />

  <PostsList {posts} />

  <Pagination currentPage={page} {totalPosts} />
{:else}
  <h1>Oops!</h1>

  <p>Sorry, no posts to show here.</p>

  <a href="/blog">Back to blog</a>
{/if}