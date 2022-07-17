/** @jsx jsx */
import { jsx, Heading, Grid, Theme, Themed } from "theme-ui"
import { getColor } from "@theme-ui/color"
import { useStaticQuery, graphql } from "gatsby"

import Link from "./link"

interface Post {
  id: string
  fields: {
    slug: string
    sourceInstanceName: string
  }
  frontmatter: {
    title: string
    date: string
    description: string
  }
}

function Posts() {
  const data = useStaticQuery(graphql`
    query PostsQuery {
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
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  `)

  const posts = data.allMdx.nodes

  return (
    <section id="blog">
      <Heading as="h2" variant="styles.h2" sx={{ mb: 3 }}>
        Recent Posts
      </Heading>
      <Grid gap={3} columns={[1, 2]}>
        {posts.map((post: Post, index: number) => {
          const linearGradientStart = index % 2 === 0 ? "#6b21a8" : "#db2777"
          const linearGradientEnd = index % 2 === 0 ? "#db2777" : "#fb923c"

          return (
            <Link
              key={post.id}
              to={post.fields.slug}
              sx={{
                color: "heading",
                textDecoration: "none",
                borderRadius: 6,
                px: 3,
                py: 4,
                backgroundImage: (t: Theme) => `
                linear-gradient(
                  to right,
                  ${getColor(t, linearGradientStart)},
                  ${getColor(t, linearGradientEnd)}
                )
              `,
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Heading
                as="h3"
                variant="styles.h3"
                sx={{ fontSize: [4, 3], m: 0, lineHeight: "body" }}
              >
                {post.frontmatter.title}
              </Heading>
              <Themed.p
                sx={{
                  fontFamily: "heading",
                  mt: 3,
                  mb: 0,
                  fontSize: [2, 1],
                  color: "text",
                }}
              >
                {post.frontmatter.date}
              </Themed.p>{" "}
            </Link>
          )
        })}
      </Grid>
    </section>
  )
}

export default Posts
