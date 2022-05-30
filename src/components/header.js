/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <h1
      sx={{
        position: "absolute",
        left: -10000,
        top: "auto",
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      {siteTitle}
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
