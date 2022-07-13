/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import PropTypes from "prop-types"

import Link from "./link"

interface Props {
  author: string
}

function Footer({ author }: Props) {
  return (
    <footer sx={{ mb: 4 }}>
      <Themed.p sx={{ m: 0 }}>
        <Link to="/" sx={{ variant: "links.subheading" }}>
          {author}
        </Link>{" "}
        © {new Date().getFullYear()}
      </Themed.p>
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: "",
}

export default Footer
