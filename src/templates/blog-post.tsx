/** @jsx jsx */
import { jsx, Heading, Themed } from "theme-ui"
import { getColor } from "@theme-ui/color"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Seo from "../components/seo"

interface Props {
  data: {
    mdx: {
      id: string
      excerpt: string
      body: string
      frontmatter: {
        title: string
        date: string
        description: string
      }
    }
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
            px: [3, 5],
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
          <Heading
            as="h1"
            variant="styles.h1"
            sx={{ fontSize: [5, 7], mt: 0 }}
            itemProp="headline"
          >
            {post.frontmatter.title}
          </Heading>
          <p sx={{ fontFamily: "heading", fontSize: [1, 3], mb: 0 }}>
            {post.frontmatter.date}
          </p>
        </header>
        <section
          itemProp="articleBody"
          sx={{ maxWidth: 700, mx: "auto", my: [4, 5] }}
        >
          <Themed.blockquote sx={{ my: 5 }}>
            <Themed.p sx={{ fontSize: [3, 4] }}>
              {post.frontmatter.description}
            </Themed.p>
          </Themed.blockquote>
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
