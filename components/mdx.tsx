import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { AnchorHTMLAttributes, ComponentType } from "react";

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

const CustomLink = (props: CustomLinkProps) => {
  const href = props.href;

  // If the href is a relative URL, use Next.js Link component
  if (href.startsWith("/")) {
    return <Link {...props}>{props.children}</Link>;
  }

  // If the href is a page anchor, use a regular anchor tag
  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  // Otherwise, assume the href is an external link and add target and rel attribute
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const mdxComponents = {
  a: CustomLink as ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>,
};

export default function Mdx({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code);

  return <MDXContent components={mdxComponents} />;
}
