/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

const Footer = ({ author }) => {
  return (
    <footer sx={{ mb: 4 }}>
      {author} © {new Date().getFullYear()}
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
