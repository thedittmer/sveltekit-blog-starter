export const siteTitle = 'My Awesome Blog'
export const siteDescription = 'Built with the SvelteKit Static Blog Starter'
export const siteURL = 'example.com'
export const siteLink = 'https://github.com/josh-collinsworth/sveltekit-blog-starter'
export const siteAuthor = 'Josh Collinsworth - find and change this text in src/lib/config.js'
export const wpGraphqlEndpoint = 'https://wp.bigdog979.com/graphql'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
  {
    title: 'Blog',
    route: '/blog'
  }, {
    title: 'About',
    route: '/about'
  }, {
    title: 'Contact',
    route: '/contact' 
  },
]