/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <Container
      variant="page"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
        }}
      >
        {children}
      </main>
      <Footer author={data.site.siteMetadata?.author} />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
