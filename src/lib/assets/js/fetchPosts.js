import { postsPerPage } from '$lib/config'

const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = '' } = {}) => {
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

  let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  
  if (category) {
    sortedPosts = sortedPosts.filter(post => post.categories.includes(category))
  }

  if (offset) {
    sortedPosts = sortedPosts.slice(offset)
  }
  
  if (limit && limit < sortedPosts.length && limit != -1) {
    sortedPosts = sortedPosts.slice(0, limit)
  }

  sortedPosts = sortedPosts.map(post => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    coverWidth: post.coverWidth, 
    coverHeight: post.coverHeight,
    date: post.date,
    categories: post.categories,
  }))

  return {
    posts: sortedPosts
  }
}

export default fetchPosts