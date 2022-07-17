/** @jsx jsx */
import { jsx, Flex, Heading, Themed } from "theme-ui"
import PropTypes from "prop-types"

import Link from "./link"

interface Props {
  siteTitle: string
}

function Header({ siteTitle }: Props) {
  return (
    <header sx={{ pt: 4 }}>
      <Flex sx={{ flexWrap: "wrap" }}>
        <Heading as="span" variant="styles.h3" sx={{ mb: [2, 0, 0], mt: 0 }}>
          <Link to="/" sx={{ variant: "links.heading" }}>
            {siteTitle}
          </Link>
        </Heading>
        <nav sx={{ width: ["100%", "auto", "auto"], marginLeft: "auto" }}>
          <ul
            sx={{
              display: "flex",
              gap: 2,
              listStyle: "none",
              m: 0,
              p: 0,
            }}
          >
            <Themed.li>
              <Link to="/" sx={{ variant: "links.subheading" }}>
                About
              </Link>
            </Themed.li>
            <Themed.li>
              <Link to="/#projects" sx={{ variant: "links.subheading" }}>
                Projects
              </Link>
            </Themed.li>
            <Themed.li>
              <Link to="/#contact" sx={{ variant: "links.subheading" }}>
                Contact
              </Link>
            </Themed.li>
          </ul>
        </nav>
      </Flex>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
