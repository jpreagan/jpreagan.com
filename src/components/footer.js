/** @jsx jsx */
import { jsx, Link, Themed } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"

const Footer = ({ author }) => {
  return (
    <footer sx={{ mb: 4 }}>
      <Themed.p sx={{ m: 0 }}>
        <Link to="/" as={GatsbyLink} variant="subheading">
          {author}
        </Link>
        {` `} © {new Date().getFullYear()}
      </Themed.p>
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
