/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { getColor } from "@theme-ui/color"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectPostTemplate = ({ data }) => {
  const project = data.mdx

  return (
    <Layout>
      <Seo
        title={project.frontmatter.title}
        description={project.frontmatter.description || project.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header
          sx={{
            borderRadius: 6,
            px: 3,
            py: [5, 6],
            my: 3,
            backgroundImage: theme => `
              linear-gradient(
                to right,
                ${getColor(theme, "#6b21a8")},
                ${getColor(theme, "#db2777")},
                ${getColor(theme, "#fb923c")}
              )
            `,
          }}
        >
          <div sx={{ maxWidth: 680, mx: "auto" }}>
            <Heading
              as="h1"
              variant="styles.h1"
              sx={{ fontSize: [5, 7], mt: 0 }}
              itemProp="headline"
            >
              {project.frontmatter.title}
            </Heading>
            <p sx={{ fontSize: [3, 4] }}>{project.frontmatter.description}</p>
          </div>
        </header>
        <section
          itemProp="articleBody"
          sx={{ my: [3, 5], maxWidth: 680, mx: "auto" }}
        >
          <MDXRenderer>{project.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  )
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query ProjectPostBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        description
      }
    }
  }
`
