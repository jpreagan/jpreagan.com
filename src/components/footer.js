import * as React from "react"
import PropTypes from "prop-types"

const Footer = ({ author }) => {
  return (
    <footer>
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
