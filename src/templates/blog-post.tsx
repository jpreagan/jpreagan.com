/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { getColor } from "@theme-ui/color"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Seo from "../components/seo"

interface Props {
  data: {
    mdx: any
  }
}

function PostTemplate({ data }: Props) {
  const post = data.mdx

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header
          sx={{
            borderRadius: 6,
            px: 3,
            py: 5,
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
          <Heading
            as="h1"
            variant="styles.h1"
            sx={{ fontSize: 6 }}
            itemProp="headline"
          >
            {post.frontmatter.title}
          </Heading>
          <p sx={{ fontSize: 3 }}>{post.frontmatter.description}</p>
        </header>
        <section itemProp="articleBody" sx={{ my: 3 }}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
