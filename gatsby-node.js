const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPage {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const pageTemplate = path.resolve("src/templates/page.jsx")
  pages.data.allPrismicPage.edges
    .filter(({ node: page }) => page.uid !== "team")
    .forEach(({ node: page }) => {
    createPage({
      path: `/${page.uid}`,
      component: pageTemplate,
      context: {
        uid: page.uid,
      },
    })
  })

  const postsResult = await graphql(`
    {
      allPrismicPost(sort: { fields: [data___published], order: DESC }) {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const posts = postsResult.data.allPrismicPost.edges
  const blogTemplate = path.resolve("src/templates/blog.jsx")
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    const currentPage = i + 1
    createPage({
      path: i === 0 ? `/news` : `/news/${currentPage}`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage,
      },
    })
  })

  const postTemplate = path.resolve("src/templates/post.jsx")
  posts.forEach(({ node: post }) => {
    createPage({
      path: `/posts/${post.uid}`,
      component: postTemplate,
      context: { uid: post.uid },
    })
  })
}
