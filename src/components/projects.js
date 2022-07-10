/** @jsx jsx */
import { jsx, Heading, Grid, Link, Flex, Themed } from "theme-ui"
import { getColor } from "@theme-ui/color"
import {
  SiGatsby as Gatsby,
  SiReact as React,
  SiGraphql as GraphQL,
  SiJest as Jest,
  SiCypress as Cypress,
} from "react-icons/si"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"

const components = {
  gatsby: Gatsby,
  react: React,
  graphql: GraphQL,
  jest: Jest,
  cypress: Cypress,
}

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMdx(
        filter: { fields: { sourceInstanceName: { eq: "projects" } } }
        sort: { fields: [frontmatter___key], order: ASC }
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
            sourceInstanceName
          }
          frontmatter {
            key
            title
            icons
            description
          }
        }
      }
    }
  `)

  const projects = data.allMdx.nodes

  return (
    <section id="projects" sx={{ my: 6 }}>
      <Heading as="h2" variant="styles.h2" sx={{ mb: 3 }}>
        Projects
      </Heading>

      <Grid gap={3} columns={[1, 2]}>
        {projects.map((project, index) => {
          const linearGradientStart = index % 2 === 0 ? "#6b21a8" : "#db2777"
          const linearGradientEnd = index % 2 === 0 ? "#db2777" : "#fb923c"
          const { title, description, icons } = project.frontmatter

          return (
            <Link
              key={project.fields.slug}
              to={project.fields.slug}
              as={GatsbyLink}
              sx={{
                color: "heading",
                textDecoration: "none",
                borderRadius: 6,
                px: 3,
                py: 4,
                backgroundImage: theme => `
                  linear-gradient(
                    to right,
                    ${getColor(theme, linearGradientStart)},
                    ${getColor(theme, linearGradientEnd)}
                  )
                `,
                transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
                "&:hover": {
                  transform: `translateY(-5px)`,
                },
              }}
            >
              <Heading as="h3" variant="styles.h3" sx={{ mb: 3, mt: 0 }}>
                {title}
              </Heading>
              <Flex sx={{ gap: 1 }}>
                {icons.map(icon => {
                  if (components[icon]) {
                    const Icon = components[icon]
                    return <Icon key={icon} size={25} title={icon} />
                  } else {
                    return null
                  }
                })}
              </Flex>
              <Themed.p sx={{ mb: 0 }}>{description}</Themed.p>
            </Link>
          )
        })}
      </Grid>
    </section>
  )
}

export default Projects
