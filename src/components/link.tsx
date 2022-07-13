/** @jsx jsx */
import { AnchorHTMLAttributes } from "react"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"
import { jsx, ThemeUIStyleObject } from "theme-ui"

interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    GatsbyLinkProps<{}> {
  sx?: ThemeUIStyleObject
}

function Link({ children, to, sx, ...rest }: LinkProps) {
  return (
    <GatsbyLink
      to={to}
      sx={{ ...sx }}
      {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {children}
    </GatsbyLink>
  )
}

Link.defaultProps = {
  sx: undefined,
}

export default Link
