<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->

 <script context="module">
  
  	export const load = async ({ fetch, params }) => {
      const id  = params.post;
    
      // console.log(id, "this should be the slug");
	  	const postRes = await fetch(`/api/post/${id}.json`)
	  	const  {post}  = await postRes.json()
     
	  	return {
	  		props: { post }
	  	}
	  }

 

</script>


<script >
  export let post
  const formatDate = (date) => new Date(date).toLocaleDateString();
	const categories = post.categories?.nodes?.map((category) => category.name) ?? [];

    //const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = meta 
 </script> 


<svelte:head>
  <!-- Be sure to add your image files and un-comment the lines below -->
  <!-- <title>{title}</title>
  <meta data-key="description" name="description" content="{excerpt}">
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:description" content={excerpt} />
  <meta name="twitter:description" content={excerpt} /> -->
  <!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
  <!-- <meta property="og:image:width" content={coverWidth} />
  <meta property="og:image:height" content={coverHeight} /> -->
  <!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>


<!-- <article class="post">
  <!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
  <!-- <img
    class="cover-image"
    src="{coverImage}"
    alt=""
    style="aspect-ratio: {coverWidth} / {coverHeight};"
    width={coverWidth}
    height={coverHeight}
  />

  <h1>{ title }</h1>
  
  <div class="meta">
    <b>Published:</b> {date}
    <br>
    <b>Updated:</b> {updated}
  </div>
  
  <svelte:component this={PostContent} />

  {#if categories}
    <aside class="post-footer">
      <h2>Posted in: </h2>
      <ul>
        {#each categories as category}
          <li>
            <a href="/blog/category/{category}/">
              { category }
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if}
</article>  -->

<article>
	{#if post.featuredImage}
		<img
		class="mx-auto h-auto w-auto"
		 src={post.featuredImage.node.sourceUrl} 
		 alt={post.featuredImage.node.altText} />
	{/if}
	<h1>{post.title}</h1>
	  <p class="post-meta">
		✍️ {post.author.node.name} on {formatDate(post.date)}
	</p>  
	<div>{@html post.content}</div>
	  {#if categories.length}
		<div class="category-list">
			<h4>Categorized As</h4>
			<p>{categories.join(', ')}</p>
		</div>
	{/if}  
</article>
