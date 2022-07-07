const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectPost = path.resolve(`./src/templates/project-post.js`)

  const allPosts = await graphql(
    `
      {
        allMdx(
          filter: { fields: { sourceInstanceName: { eq: "posts" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
              sourceInstanceName
            }
          }
        }
      }
    `
  )

  if (allPosts.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      allPosts.errors
    )
    return
  }

  const allProjects = await graphql(
    `
      {
        allMdx(filter: { fields: { sourceInstanceName: { eq: "projects" } } }) {
          nodes {
            id
            fields {
              slug
              sourceInstanceName
            }
          }
        }
      }
    `
  )

  if (allProjects.errors) {
    reporter.panicOnBuild(
      `There was an error loading your project posts`,
      allProjects.errors
    )
    return
  }

  const posts = allPosts.data.allMdx.nodes
  const projects = allProjects.data.allMdx.nodes

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
        },
      })
    })
  }
  if (projects.length > 0) {
    projects.forEach((project, index) => {
      createPage({
        path: project.fields.slug,
        component: projectPost,
        context: {
          id: project.id,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const { sourceInstanceName } = getNode(node.parent)
    const filePath = createFilePath({ node, getNode })

    createNodeField({
      name: `sourceInstanceName`,
      node,
      value: sourceInstanceName,
    })
    createNodeField({
      name: `slug`,
      node,
      value: `/${sourceInstanceName}${filePath}`,
    })
  }
}
