/** @jsx jsx */
import { jsx, Flex, Heading, Link, Themed } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header sx={{ pt: 4 }}>
    <Flex sx={{ flexWrap: "wrap" }}>
      <Heading as="span" variant="styles.h3" sx={{ mb: [2, 0, 0], mt: 0 }}>
        <Link to="/" as={GatsbyLink} variant="heading">
          {siteTitle}
        </Link>
      </Heading>
      <nav sx={{ width: ["100%", "auto", "auto"], marginLeft: "auto" }}>
        <ul sx={{ display: "flex", gap: 2, listStyle: "none", m: 0, p: 0 }}>
          <Themed.li>
            <Link to="/" as={GatsbyLink} variant="subheading">
              About
            </Link>
          </Themed.li>
          <Themed.li>
            <Link to="/#projects" as={GatsbyLink} variant="subheading">
              Projects
            </Link>
          </Themed.li>
          <Themed.li>
            <Link to="/#contact" as={GatsbyLink} variant="subheading">
              Contact
            </Link>
          </Themed.li>
        </ul>
      </nav>
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
