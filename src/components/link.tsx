/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui"
import { FunctionComponent, AnchorHTMLAttributes } from "react"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    GatsbyLinkProps<{}> {
  sx?: ThemeUIStyleObject
}

export const Link: FunctionComponent<LinkProps> = ({
  children,
  to,
  sx,
  ...rest
}) => (
  <GatsbyLink
    to={to}
    sx={{ ...sx }}
    {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
  >
    {children}
  </GatsbyLink>
)
