const path = require("path")

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

  const template = path.resolve("src/templates/page.jsx")

  pages.data.allPrismicPage.edges.forEach(it => {
    createPage({
      path: `/${it.node.uid}`,
      component: template,
      context: {
        uid: it.node.uid,
      },
    })
  })
}
