export const get = async () => {
  try {
	const posts = [
		{
		  "title": "This is the first post",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
		{
		  "title": "A Markdown post with a Svelte component",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
		{
		  "title": "A Markdown post with a Svelte component",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
		{
		  "title": "A Markdown post with a Svelte component",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
		{
		  "title": "A Markdown post with a Svelte component",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
		{
		  "title": "A Markdown post with a Svelte component",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
		{
		  "title": "A Markdown post with a Svelte component",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
		{
		  "title": "A Markdown post with a Svelte component",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
		{
		  "title": "A Markdown post with a Svelte component",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
		{
		  "title": "A Markdown post with a Svelte component",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
		{
		  "title": "A Markdown post with a Svelte component",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
		{
		  "title": "A Markdown post with a Svelte component",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
		{
		  "title": "A Markdown post with a Svelte component",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
		{
		  "title": "A Markdown post with a Svelte component",
		  "slug": "mdsvex-component-example",
		  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post.",
		  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"markdown",
			"svelte"
		  ]
		},
		{
		  "title": "Syntax highlighting with mdsvex",
		  "slug": "syntax-highlighting-example",
		  "excerpt": "This post shows you how syntax highlighting works here.",
		  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-12-01",
		  "categories": [
			"sveltekit",
			"web",
			"css",
			"markdown"
		  ]
		},
		{
		  "title": "Automatic heading links in mdsvex",
		  "slug": "heading-links-example",
		  "excerpt": "Check out how heading links work with this starter in this post.",
		  "coverImage": "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg",
		  "coverWidth": 16,
		  "coverHeight": 9,
		  "date": "2021-10-26",
		  "categories": [
			"sveltekit",
			"markdown"
		  ]
		},
	
	  ]
    
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