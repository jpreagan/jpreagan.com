/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"

const Footer = ({ author }) => {
  return (
    <footer sx={{ mb: 4 }}>
      <Link to="/" as={GatsbyLink} variant="subheading">
        {author}
      </Link>
      {` `} © {new Date().getFullYear()}
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer
